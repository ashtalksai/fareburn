"use client"

import { motion } from "framer-motion"
import {
  Bell,
  ArrowLeftRight,
  Calculator,
  Layers,
  ShieldCheck,
  LineChart,
} from "lucide-react"

const features = [
  {
    icon: Bell,
    title: "Real-Time Award Alerts",
    description:
      "Get notified instantly when premium award seats open on your target routes. Never miss a window again.",
    large: true,
  },
  {
    icon: ArrowLeftRight,
    title: "Transfer Path Optimizer",
    description:
      "We calculate the best transfer route across programs — Chase to United, Amex to ANA — automatically.",
    large: true,
  },
  {
    icon: Calculator,
    title: "Points-to-Seat Calculator",
    description:
      "Enter your balances and destination. See every option, ranked by value per point.",
    large: false,
  },
  {
    icon: Layers,
    title: "Multi-Program Dashboard",
    description:
      "All your loyalty balances in one place. Track value trends over time.",
    large: false,
  },
  {
    icon: ShieldCheck,
    title: "Value Score per Award",
    description:
      "Every redemption gets a score. Know if you're getting outsized value or leaving money on the table.",
    large: false,
  },
  {
    icon: LineChart,
    title: "Route Availability History",
    description:
      "See when seats typically open on your routes. Time your searches for maximum success.",
    large: false,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Features
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Everything You Need to Maximize Your Points
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card border border-border rounded-2xl p-6 hover:amber-border-glow transition-all duration-300 group ${
                feature.large ? "sm:col-span-1 lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-body text-base font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
