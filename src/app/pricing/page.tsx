"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "Try the basics with one program",
    features: [
      "1 loyalty program",
      "Points-to-Seat Calculator",
      "Weekly email digest",
      "Basic route search",
      "Community support",
    ],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Starter",
    monthly: 15,
    yearly: 144,
    description: "For serious points optimizers",
    features: [
      "Unlimited programs",
      "Real-time email alerts",
      "Transfer path optimizer",
      "Value scoring per award",
      "Route availability history",
      "Priority support",
      "Mobile notifications",
      "Advanced filters",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    highlighted: true,
  },
  {
    name: "Corporate",
    monthly: 149,
    yearly: 1428,
    description: "For teams and travel managers",
    features: [
      "Everything in Starter",
      "Team dashboard",
      "Multi-employee consolidation",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "SSO / SAML",
      "99.9% SLA",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="font-body text-muted-foreground max-w-lg mx-auto mb-8">
                Start free. Upgrade when your points deserve it. Cancel anytime.
              </p>

              {/* Toggle */}
              <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full p-1">
                <button
                  onClick={() => setAnnual(false)}
                  className={`font-body text-sm px-4 py-1.5 rounded-full transition-colors ${
                    !annual
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setAnnual(true)}
                  className={`font-body text-sm px-4 py-1.5 rounded-full transition-colors ${
                    annual
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  Yearly{" "}
                  <span className="text-xs opacity-70">(save 20%)</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className={`bg-card rounded-2xl p-6 border flex flex-col ${
                    plan.highlighted
                      ? "border-primary amber-glow"
                      : "border-border"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="text-center mb-3">
                      <span className="font-body text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-display text-4xl text-foreground">
                      ${annual ? Math.round(plan.yearly / 12) : plan.monthly}
                    </span>
                    <span className="text-sm text-muted-foreground font-body">
                      /mo
                    </span>
                  </div>
                  {annual && plan.yearly > 0 && (
                    <p className="text-xs text-muted-foreground font-body mb-2">
                      ${plan.yearly}/year billed annually
                    </p>
                  )}
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
      </main>
      <Footer />
    </>
  )
}
