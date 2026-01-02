import { motion } from "framer-motion";

const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="floating-blob w-[500px] h-[500px] top-[-100px] left-[-100px]"
        style={{ background: "var(--blob-1)" }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-blob w-[600px] h-[600px] top-[40%] right-[-200px]"
        style={{ background: "var(--blob-2)" }}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-blob w-[400px] h-[400px] bottom-[-100px] left-[30%]"
        style={{ background: "var(--blob-3)" }}
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingBlobs;
