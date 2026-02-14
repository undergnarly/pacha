"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  visible: boolean;
  progress: number;
}

export default function LoadingScreen({ visible, progress }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"logo" | "bar" | "exit">("logo");

  // Phase transitions: logo reveal → bar → exit when loaded
  useEffect(() => {
    if (phase === "logo") {
      const t = setTimeout(() => setPhase("bar"), 1200);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (progress >= 1 && phase === "bar") {
      const t = setTimeout(() => setPhase("exit"), 400);
      return () => clearTimeout(t);
    }
  }, [progress, phase]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0a0a0a" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Subtle radial glow behind logo */}
          <motion.div
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5, delay: 0 }}
            style={{
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            }}
          />

          {/* Logo: emerges from blur and transparency */}
          <motion.img
            src="/images/logo.webp"
            alt="Pacha Alpaca"
            className="relative h-28 w-auto sm:h-36"
            initial={{
              opacity: 0,
              scale: 0.8,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Progress bar — appears after logo reveal */}
          <motion.div
            className="relative mt-10 h-[1px] w-40 overflow-hidden sm:w-48"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === "bar" || phase === "exit" ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Track */}
            <div className="absolute inset-0 bg-white/10" />
            {/* Fill */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-white/80"
              initial={{ width: "0%" }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>

          {/* Particles / shimmer dots — subtle magic */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: 2,
                height: 2,
              }}
              initial={{
                opacity: 0,
                x: (i - 3) * 30,
                y: 20,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [20, -40 - i * 15],
                x: (i - 3) * 30 + (i % 2 === 0 ? 10 : -10),
              }}
              transition={{
                duration: 2 + i * 0.3,
                delay: 0.3 + i * 0.15,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
