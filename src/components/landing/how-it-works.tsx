"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Connect Your Programs",
    description:
      "Securely link your credit card and loyalty accounts. We support all major programs — Chase, Amex, Citi, Capital One, and more.",
  },
  {
    number: "2",
    title: "Set Your Dream Routes",
    description:
      "Tell us where you want to go and in what cabin class. We'll do the searching — across every airline and hotel partner.",
  },
  {
    number: "3",
    title: "Get Alerts & Book",
    description:
      "Receive instant notifications when award seats open. We handle the transfer math — you just book directly with your points.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Three Steps to Better Redemptions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-6">
                <span className="font-mono text-2xl font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="font-body text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
