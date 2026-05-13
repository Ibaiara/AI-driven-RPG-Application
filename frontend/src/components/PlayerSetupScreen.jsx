import { useState } from "react";
import Screen from "./ui/screen";
import { motion } from "framer-motion";

export default function PlayerSetupScreen({ onStart }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function resetUser() {
    if (!name) {
      setMessage("Introduce un ID de jugador primero.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await fetch("http://localhost:5678/webhook/rpg/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: name }),
      });

      setMessage(`Estado del jugador "${name}" reseteado.`);
    } catch {
      setMessage("Error al resetear el jugador.");
    } finally {
      setLoading(false);
    }
  }

  async function resetAllUsers() {
    if (
      !window.confirm(
        "⚠️ Esto eliminará TODOS los estados de jugadores.\n¿Continuar?"
      )
    ) {
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await fetch("http://localhost:5678/webhook/rpg/resetALL", {
        method: "POST",
      });

      setMessage("Todos los jugadores han sido reseteados.");
    } catch {
      setMessage("Error al resetear todos los jugadores.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen>
      <motion.div
        className="w-full max-w-md bg-zinc-900/80 backdrop-blur-sm p-6 rounded border border-zinc-800 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* TÍTULO */}
        <h1 className="text-2xl font-semibold">IbaiRPG</h1>

        <p className="text-sm text-zinc-400">
          Identificación del jugador.
          <br />
          El estado de la partida se vinculará a este ID.
        </p>

        {/* INPUT */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ID del jugador"
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-zinc-600"
        />

        {/* COMENZAR */}
        <button
          onClick={() => onStart(name)}
          disabled={!name || loading}
          className="w-full px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600 transition disabled:opacity-50"
        >
          Comenzar partida
        </button>

        {/* SECCIÓN ADMIN */}
        <div className="border-t border-zinc-800 pt-4 space-y-2">
          <div className="text-xs uppercase text-zinc-500">
            Herramientas de prueba
          </div>

          <button
            onClick={resetUser}
            disabled={loading}
            className="w-full px-4 py-2 text-sm rounded bg-zinc-800 hover:bg-zinc-700 transition"
          >
            Resetear este jugador
          </button>

          <button
            onClick={resetAllUsers}
            disabled={loading}
            className="w-full px-4 py-2 text-sm rounded bg-red-900/60 hover:bg-red-900 transition"
          >
            Resetear TODOS los jugadores
          </button>
        </div>

        {/* FEEDBACK */}
        {message && (
          <div className="text-xs text-zinc-400 mt-2">
            {message}
          </div>
        )}
      </motion.div>
    </Screen>
  );
}