"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const programs = [
  { name: "Chase UR", color: "#0F4C99" },
  { name: "Amex MR", color: "#006FCF" },
  { name: "Citi TY", color: "#1A1F71" },
  { name: "Capital One", color: "#D03027" },
]

export function Solution() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            The Solution
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground max-w-2xl mx-auto">
            Fareburn Connects Your Points to the Best Seats, in Real-Time
          </h2>
        </motion.div>

        {/* Flow diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Credit card programs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {programs.map((program) => (
              <div
                key={program.name}
                className="px-4 py-2.5 rounded-xl border border-border bg-card font-body text-sm font-semibold text-foreground"
                style={{ borderLeftColor: program.color, borderLeftWidth: 3 }}
              >
                {program.name}
              </div>
            ))}
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="h-px w-12 bg-primary hidden lg:block" />
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
            <div className="h-px w-12 bg-primary hidden lg:block" />
          </motion.div>

          {/* Fareburn engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative w-48 h-48 rounded-2xl overflow-hidden amber-glow"
          >
            <Image
              src="/images/hero-illustration.png"
              alt="Fareburn scanning engine"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                <p className="font-mono text-xs text-primary font-bold">
                  AI Matching Engine
                </p>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <div className="h-px w-12 bg-primary hidden lg:block" />
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
            <div className="h-px w-12 bg-primary hidden lg:block" />
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-2xl p-4 amber-border-glow"
          >
            <p className="font-body text-xs text-muted-foreground mb-1">Best match found</p>
            <p className="font-body text-sm font-semibold text-foreground mb-1">
              NYC → Tokyo Business
            </p>
            <p className="font-mono text-primary text-sm font-bold">
              Book for 65k Miles
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
