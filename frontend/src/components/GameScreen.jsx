import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { sendAction } from "../services/api";

export default function GameScreen({ playerId, initialAction, onExit }) {
  const [narrative, setNarrative] = useState("");
  const [options, setOptions] = useState([]);
  const [state, setState] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [volume, setVolume] = useState(0.8);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const audioRef = useRef(null);

  // Acción inicial
  useEffect(() => {
    if (initialAction) handleAction(initialAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ajustar volumen en tiempo real
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  async function handleAction(action) {
    if (!action || loading) return;
    setLoading(true);

    try {
      const data = await sendAction(playerId, action);

      // Guardar historial ANTES de sobrescribir
      if (data.narrative) {
        setHistory(prev => [
          ...prev,
          {
            narrative: data.narrative,
            location: data.state?.location
          }
        ]);
      }

      setNarrative(data.narrative || "");
      setOptions(Array.isArray(data.options) ? data.options : []);
      setState(data.state || null);
      setImage(data.image || null);

      if (data.voice_url) {
        if (audioRef.current) audioRef.current.pause();
        const audio = new Audio(data.voice_url);
        audio.volume = volume;
        audioRef.current = audio;
        audio.play().catch(() => {});
      }
    } catch (err) {
      console.error("Error calling API:", err);
    } finally {
      setLoading(false);
    }
  }

  // Portal target
  const gameRoot = document.getElementById("game-root");
  if (!gameRoot) return null;

  return createPortal(
    <>
      {/* ESCENA PRINCIPAL */}
      <div
        className="fixed inset-0 z-50 text-zinc-100"
        style={{
          backgroundImage: image
            ? `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url(${image})`
            : "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-screen flex flex-col justify-between px-8 py-6">

          {/* PANEL LATERAL */}
          {state && (
            <div className="absolute top-6 right-6 w-72 p-4 text-xs bg-zinc-900/70 backdrop-blur-sm rounded space-y-4">

              {/* ESTADO */}
              <div>
                <div className="text-xs uppercase text-zinc-400 mb-2">
                  {state.location}
                </div>
                <div>Apoyo: {state.support}</div>
                <div>Recursos: {state.resources}</div>
                <div>Riesgo: {state.risk}</div>
              </div>

              <div className="border-t border-zinc-700 pt-3" />

              {/* VOLUMEN */}
              <div>
                <label className="block text-zinc-400 mb-1">
                  🔊 Volumen
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="border-t border-zinc-700 pt-3 space-y-2">

                {/* HISTORIAL */}
                <button
                  onClick={() => setShowHistory(true)}
                  className="w-full text-left text-zinc-300 hover:text-white transition"
                >
                  📜 Ver historial
                </button>

                {/* SALIR */}
                <button
                  onClick={onExit}
                  className="w-full text-left text-red-400 hover:text-red-300 transition"
                >
                  ⬅ Volver a selección de jugador
                </button>
              </div>
            </div>
          )}

          {/* TEXTO NARRATIVO */}
          <div className="max-w-3xl text-xl leading-relaxed whitespace-pre-wrap bg-zinc-900/60 backdrop-blur-sm p-6 rounded">
            {narrative}
          </div>

          {/* DECISIONES */}
          <div className="max-w-3xl space-y-3 mt-6">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAction(opt)}
                disabled={loading}
                className="
                  w-full text-left px-6 py-4 rounded-lg
                  bg-zinc-900/80 hover:bg-zinc-800
                  transition ring-1 ring-zinc-700
                  disabled:opacity-50
                "
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HISTORIAL OVERLAY */}
      {showHistory && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex justify-end">
          <div className="w-96 h-full bg-zinc-950 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg">Historial</h2>
              <button
                onClick={() => setShowHistory(false)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm">
              {history.map((h, i) => (
                <div key={i} className="border-b border-zinc-800 pb-3">
                  <div className="text-zinc-500 mb-1">
                    {h.location}
                  </div>
                  <div className="whitespace-pre-wrap">
                    {h.narrative}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>,
    gameRoot
  );
}