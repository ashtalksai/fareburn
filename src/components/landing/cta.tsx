"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Flame } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl p-12 sm:p-16 text-center amber-border-glow relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[80px]" />

          <Flame className="h-10 w-10 text-primary mx-auto mb-6 relative" />
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4 relative">
            Ready to Unlock Your Points Potential?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto relative">
            Join thousands of points enthusiasts who are getting outsized value
            from their rewards. Start scanning for free.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-[#F0B030] transition-colors"
            >
              Start Scanning Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tools/calculator"
              className="inline-flex items-center gap-2 border border-primary text-primary font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Try the Free Calculator
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
