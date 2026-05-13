import Screen from "./ui/screen";
import { motion } from "framer-motion";

export default function CreditsScreen({ onNext }) {
  return (
    <Screen>
      <motion.div
        className="max-w-xl text-left space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-zinc-100">
          Créditos
        </h2>

        <div className="text-zinc-300 space-y-2">
          <p>
            <span className="text-zinc-400">Diseño del sistema narrativo</span>
            <br />
            Ibai Arana
          </p>

          <p>
            <span className="text-zinc-400">Arquitectura técnica</span>
            <br />
            n8n · JavaScript · React
          </p>

          <p>
            <span className="text-zinc-400">Narrativa y simulación</span>
            <br />
            Diseño propio con apoyo de IA generativa
          </p>
        </div>

        <div className="pt-4 text-sm text-zinc-500">
          SIMULACIÓN: INSURGENCIA es un proyecto experimental
          centrado en el diseño de sistemas narrativos,
          no en la creación de un videojuego comercial.
        </div>

        <motion.button
          onClick={onNext}
          className="mt-8 px-6 py-3 rounded bg-zinc-800 hover:bg-zinc-700 transition text-zinc-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Continuar
        </motion.button>
      </motion.div>
    </Screen>
  );
}