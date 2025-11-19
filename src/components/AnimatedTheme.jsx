import { motion } from "framer-motion";

// AnimatedTheme renders subtle animated gradient blobs and a faint grid overlay
export default function AnimatedTheme() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #ffffff, #ffffff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ffffff, #ffffff 1px, transparent 1px, transparent 40px)",
          maskImage: "radial-gradient(circle at center, black, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 85%)",
        }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-600/30 blur-3xl"
        animate={{ x: [0, -25, 15, 0], y: [0, 10, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl"
        animate={{ x: [0, 15, -25, 0], y: [0, -15, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
