import Screen from "./ui/screen";
import { motion } from "framer-motion";

export default function IntroScreen({ onEnter }) {
  return (
    <Screen>
      <motion.div
        className="max-w-2xl text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-2xl leading-relaxed text-zinc-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          El Sacro Imperio de Britannia controla gran parte del planeta.
        </motion.p>

        <motion.p
          className="mt-6 text-xl leading-relaxed text-zinc-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Sus colonias se administran mediante vigilancia constante,
          segregación social
          y presencia militar permanente.
        </motion.p>

        <motion.p
          className="mt-6 text-xl leading-relaxed text-zinc-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          La estabilidad no es un estado natural.
          Es un proceso que se mantiene activamente.
        </motion.p>

        <motion.hr
          className="my-8 border-zinc-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        />

        <motion.p
          className="text-lg leading-relaxed text-zinc-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Eres un civil residente en una colonia imperial.
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-zinc-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Tienes acceso limitado a recursos,
          movilidad restringida
          y una posición legal dentro del sistema.
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-zinc-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          No operas desde el poder institucional.
          Operas desde los márgenes.
        </motion.p>

        <motion.hr
          className="my-8 border-zinc-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        />

        <motion.p
          className="text-base leading-relaxed text-zinc-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Esta simulación evalúa decisiones acumuladas,
          no acciones aisladas.
        </motion.p>

        <motion.p
          className="mt-4 text-base leading-relaxed text-zinc-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Cada elección modifica el estado del sistema
          y condiciona las siguientes posibilidades.
        </motion.p>

        <motion.button
          onClick={onEnter}
          className="mt-10 px-8 py-3 rounded bg-zinc-800 hover:bg-zinc-700 transition text-zinc-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Acceder a la simulación
        </motion.button>
      </motion.div>
    </Screen>
  );
}