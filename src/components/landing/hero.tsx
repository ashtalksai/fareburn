"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Plane } from "lucide-react"

function AnimatedCounter({ target }: { target: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.floor(v))

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2.5,
      ease: "easeOut",
    })
    return controls.stop
  }, [count, target])

  return <motion.span>{rounded}</motion.span>
}

const routes = [
  { from: "NYC", to: "Tokyo", cabin: "Business", points: "65k United miles", status: "OPEN" },
  { from: "LAX", to: "Paris", cabin: "First", points: "88k Amex MR", status: "OPEN" },
  { from: "SFO", to: "London", cabin: "Business", points: "57.5k Chase UR", status: "OPEN" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            Your Points Are{" "}
            <span className="text-primary">Worth More</span> Than You Think
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Fareburn scans 50+ airlines and hotels to find when YOUR points
            unlock premium seats — and alerts you instantly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-[#F0B030] transition-colors"
            >
              Scan My Points Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 border border-border text-foreground font-body font-semibold px-6 py-3 rounded-full hover:border-primary/50 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>

        {/* Right — Dashboard Preview Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-card rounded-2xl border border-border amber-border-glow p-6">
            {/* Counter */}
            <div className="text-center mb-6">
              <div className="font-mono text-5xl sm:text-6xl font-bold text-primary mb-1">
                <AnimatedCounter target={247} />
              </div>
              <p className="text-sm text-muted-foreground font-body">
                award opportunities found this week
              </p>
              {/* Mini sparkline */}
              <div className="mt-3 h-8 flex items-end justify-center gap-[2px]">
                {[30, 45, 35, 55, 40, 65, 50, 70, 60, 80, 55, 75, 85, 70, 90].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                      className="w-1.5 bg-primary/40 rounded-full"
                    />
                  )
                )}
              </div>
            </div>

            {/* Route rows */}
            <div className="space-y-3">
              {routes.map((route, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  className="flex items-center justify-between bg-secondary/50 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        {route.from}→{route.to} {route.cabin}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {route.points}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-body font-bold px-3 py-1 rounded-full">
                    <Plane className="h-3 w-3" />
                    {route.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
