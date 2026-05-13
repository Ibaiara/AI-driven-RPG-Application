import Screen from "./ui/screen";
import { motion } from "framer-motion";

export default function TitleScreen({ onStart }) {
  return (
    <Screen>
      <div className="text-center space-y-6 max-w-xl">

        <motion.h1
          className="text-5xl font-semibold tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          SIMULACIÓN: INSURGENCIA
        </motion.h1>

        <motion.p
          className="text-zinc-300 text-sm uppercase tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Un entorno narrativo de decisiones estratégicas
          <br />
          impulsado por inteligencia artificial
        </motion.p>
        
        <motion.button
          onClick={onStart}
          className="mt-6 px-6 py-3 rounded bg-zinc-800 hover:bg-zinc-700 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Iniciar simulación
        </motion.button>
      </div>
    </Screen>
  );
}