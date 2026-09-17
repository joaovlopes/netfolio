"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import NetworkBackground from "@/components/NetworkBackground";
import Terminal from "@/components/Terminal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      <NetworkBackground />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 text-center"
      >
        <span className="rounded-full border border-border bg-surface/80 px-4 py-1 font-mono text-xs text-signal">
          status: online
        </span>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Olá, eu sou{" "}
            <span className="text-accent">{profile.name}</span>
          </h1>
          <p className="mx-auto max-w-xl text-balance font-mono text-sm text-muted sm:text-base">
            {profile.role}
          </p>
          <p className="mx-auto max-w-lg text-balance text-sm text-foreground/70 sm:text-base">
            {profile.tagline}
          </p>
        </div>

        <p className="font-mono text-xs text-muted">
          use o terminal abaixo para explorar — ou role a página normalmente
        </p>

        <Terminal />
      </motion.div>
    </section>
  );
}
