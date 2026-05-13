import { motion } from "framer-motion";

export default function Screen({ children }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-zinc-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}