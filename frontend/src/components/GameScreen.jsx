import React, { useEffect, useRef, useState } from "react";
import { sendAction } from "../services/api";

/* ───────────────────────────── */
/* ESTILO */
/* ───────────────────────────── */

const primaryButton = {
  padding: "14px 20px",
  fontSize: 14,
  backgroundColor: "#4b5cff",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};

/* ───────────────────────────── */
/* COMPONENTE */
/* ───────────────────────────── */

export default function GameScreen() {
  const [userId, setUserId] = useState("player1"); // FIX: ahora editable
  const [input, setInput] = useState("");
  const [narrative, setNarrative] = useState("");
  const [options, setOptions] = useState([]);
  const [state, setState] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const audioRef = useRef(null);

  /* ───────────────────────────── */
  /* ENVIAR ACCIÓN A N8N */
  /* ───────────────────────────── */

  async function handleAction(action) {
    if (!action) return;

    setLoading(true);

    try {
      const data = await sendAction(userId, action);

      const newNarrative = data.narrative || "";

      /* ──────────────── */
      /* 1. SOLO ÚLTIMA ESCENA */
      /* ──────────────── */
      setNarrative(newNarrative);

      /* ──────────────── */
      /* 2. HISTORIAL SIN ÚLTIMA ESCENA */
      /* ──────────────── */
      setHistory(prev => [
          ...prev,
          {
            input: action,
            location: data.state?.location || "unknown"
          }
        ]);
      setOptions(Array.isArray(data.options) ? data.options : []);
      setState(data.state || null);

      if (data.image) setImage(data.image);

      /* AUDIO */
      if (data.voice_url) {
        if (audioRef.current) {
          audioRef.current.pause();
        }

        const audio = new Audio(data.voice_url);
        audioRef.current = audio;
        audio.play().catch(() => {});
      }

    } catch (err) {
      setNarrative("❌ Error conectando con el servidor.");
    }

    setInput("");
    setLoading(false);
  }

  /* ───────────────────────────── */
  /* UI */
  /* ───────────────────────────── */

  return (
    <main style={{ display: "flex", height: "100vh", background: "#0e0e14", color: "#eaeaf0" }}>
      
      {/* IZQUIERDA */}
      <div style={{ flex: 3, display: "flex", flexDirection: "column" }}>
        
        {/* IMAGEN */}
        <div style={{ flex: 1, background: "#000" }}>
          {image ? (
            <img
              src={image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div style={{ color: "#666", textAlign: "center", marginTop: "20%" }}>
              Sin imagen aún
            </div>
          )}
        </div>

        {/* INPUT + OPCIONES */}
        <div style={{ padding: 16 }}>
          
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {options.map((opt, i) => (
              <button key={i} style={primaryButton} onClick={() => handleAction(opt)}>
                {opt}
              </button>
            ))}
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Acción libre..."
            style={{ width: "100%", marginTop: 10, minHeight: 60 }}
          />

          <button
            style={{ ...primaryButton, marginTop: 10 }}
            onClick={() => handleAction(input)}
            disabled={loading}
          >
            {loading ? "Pensando..." : "Enviar"}
          </button>
        </div>
      </div>

      {/* DERECHA */}
      <div style={{ flex: 1, padding: 20, borderLeft: "1px solid #222", overflowY: "auto" }}>

        {/* PLAYER ID */}
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontSize: 12, opacity: 0.7 }}>
            Player ID
          </label>

          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ width: "100%", padding: 6, marginTop: 4 }}
          />
        </div>

        {/* HISTORIAL */}
        <button onClick={() => setShowHistory(!showHistory)}>
          {showHistory ? "Cerrar historial" : "Ver historial"}
        </button>

        {showHistory && (
          <div style={{
            marginTop: 10,
            maxHeight: 300,
            overflowY: "auto",
            fontSize: 12,
            borderTop: "1px solid #333",
            paddingTop: 10
          }}>
            {history.map((h, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ opacity: 0.6 }}>
                  📍 {h.location}
                </div>
                <div>
                  <strong>Tú:</strong> {h.input}
                </div>
                <div>
                  {h.narrative}
                </div>
                <hr />
              </div>
            ))}
          </div>
        )}

        {/* NARRATIVA ACTUAL */}
        <h3>Narrativa</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{narrative}</p>

        {/* ESTADO */}
        {state && (
          <>
            <hr />
            <p>📍 {state.location}</p>
            <p>❤️ HP: {state.hp}</p>
            <p>💰 Oro: {state.gold}</p>
            <p>🎒 Inventario: {state.inventory?.join(", ")}</p>
          </>
        )}
      </div>
    </main>
  );
}