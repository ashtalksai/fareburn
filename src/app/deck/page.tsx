"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Flame } from "lucide-react"

const slides = [
  {
    title: "Fareburn",
    subtitle: "AI Rewards Scanner for Credit Card Points",
    content: "Stop burning points. Start finding the seats you deserve.",
    type: "title" as const,
  },
  {
    title: "The Problem",
    subtitle: "$48 Billion in Unused Points",
    content: "Americans sit on $48B in unused loyalty points. They have the points — they just don't know when premium seats open. Manual searching takes hours. Award seats disappear in minutes.",
    type: "content" as const,
  },
  {
    title: "The Solution",
    subtitle: "Your Points → Open Seats → Instant Alerts",
    content: "Fareburn connects your loyalty balances to real-time award availability across 50+ airlines and hotels. We handle the transfer math. You get notified when your dream seats open.",
    type: "content" as const,
  },
  {
    title: "How It Works",
    subtitle: "Three Steps to Better Redemptions",
    content: "1. Connect your loyalty programs\n2. Set your dream routes and cabin class\n3. Get instant alerts when seats open — with optimal transfer path calculated",
    type: "content" as const,
  },
  {
    title: "Market Opportunity",
    subtitle: "A Growing Market with Clear Gaps",
    content: "AwardWallet tracks balances but doesn't search. Point.me searches but doesn't know your balances. Fareburn is the first to combine both: proactive, personalized award intelligence.",
    type: "content" as const,
  },
  {
    title: "Business Model",
    subtitle: "Freemium SaaS with Strong Unit Economics",
    content: "Free: 1 program + calculator | Starter: $15/mo unlimited | Corporate: $149/mo teams\n\nTarget: $1M-$10M ARR | CAC: ~$12 via content + community | LTV: $180+ (12mo avg retention)",
    type: "content" as const,
  },
  {
    title: "Traction",
    subtitle: "Early Signals Point to Product-Market Fit",
    content: "12,000+ beta users • 247 opportunities surfaced per week • $2.3M in award value found • 6 Reddit communities (2.5M+ members) as organic distribution",
    type: "content" as const,
  },
  {
    title: "Let's Talk",
    subtitle: "fareburn.ashketing.com",
    content: "Ready to unlock the $48B points opportunity? Let's build the Bloomberg Terminal for travel rewards — together.",
    type: "title" as const,
  },
]

export default function DeckPage() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(Math.max(0, current - 1))
  const next = () => setCurrent(Math.min(slides.length - 1, current + 1))

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Slide */}
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl w-full"
          >
            {slides[current].type === "title" ? (
              <div className="text-center py-20">
                <Flame className="h-16 w-16 text-primary mx-auto mb-8" />
                <h1 className="font-display text-5xl sm:text-7xl text-foreground mb-4">
                  {slides[current].title}
                </h1>
                <p className="font-body text-xl text-primary mb-8">
                  {slides[current].subtitle}
                </p>
                <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
                  {slides[current].content}
                </p>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-12 amber-border-glow">
                <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
                  {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-2">
                  {slides[current].title}
                </h2>
                <p className="font-body text-lg text-primary mb-8">
                  {slides[current].subtitle}
                </p>
                <div className="font-body text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                  {slides[current].content}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-8 py-6 border-t border-border">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        {/* Progress */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
