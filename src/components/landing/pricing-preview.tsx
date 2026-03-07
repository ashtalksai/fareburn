"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Try the basics with one program",
    features: [
      "1 loyalty program",
      "Points-to-Seat Calculator",
      "Weekly email digest",
      "Basic route search",
    ],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$15",
    period: "/mo",
    description: "For serious points optimizers",
    features: [
      "Unlimited programs",
      "Real-time email alerts",
      "Transfer path optimizer",
      "Value scoring per award",
      "Route availability history",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    highlighted: true,
  },
  {
    name: "Corporate",
    price: "$149",
    period: "/mo",
    description: "For teams and travel managers",
    features: [
      "Everything in Starter",
      "Team dashboard",
      "Multi-employee consolidation",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
]

export function PricingPreview() {
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
            Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Start Free, Scale When Ready
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-card rounded-2xl p-6 border ${
                plan.highlighted
                  ? "border-primary amber-glow"
                  : "border-border"
              } flex flex-col`}
            >
              <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-4xl text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground font-body">
                  {plan.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-body mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground font-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`text-center text-sm font-body font-semibold px-5 py-2.5 rounded-full transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-[#F0B030]"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
