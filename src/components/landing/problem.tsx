"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, DollarSign } from "lucide-react"

const problems = [
  {
    icon: DollarSign,
    title: "You have the points. You don't know when seats open.",
    description:
      "Americans sit on $48B in unused points. The value is there — the visibility isn't. You're checking manually, missing windows, and settling for less.",
  },
  {
    icon: Clock,
    title: "Searching is a full-time job.",
    description:
      "Cross-referencing transfer partners, checking availability across airlines, calculating optimal transfer ratios — it takes hours every week.",
  },
  {
    icon: AlertTriangle,
    title: "By the time you find a deal, it's gone.",
    description:
      "Premium award seats disappear in hours. Without real-time alerts, you're always a step behind the power users who know first.",
  },
]

export function Problem() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            The Problem
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Your Points Are Burning While You Wait
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-6 hover:amber-border-glow transition-all duration-300"
            >
              <problem.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-lg text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
