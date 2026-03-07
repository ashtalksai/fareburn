"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "James K.",
    role: "Travel Blogger",
    quote:
      "I was sitting on 200k Chase points with no idea how to use them. Fareburn found me a business class ticket to London for 57k points. The ROI was insane.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Points Enthusiast",
    quote:
      "Fareburn found me a first-class ticket to Tokyo using points I didn't even know I could transfer. Game changer. I've recommended it to everyone in my churning group.",
    rating: 5,
  },
  {
    name: "David M.",
    role: "Frequent Flyer",
    quote:
      "The transfer optimizer alone saved me 30,000 points on a single booking. I was about to use Amex direct — Fareburn showed me the Chase→United path instead.",
    rating: 5,
  },
]

export function Testimonials() {
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
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Loved by Points Enthusiasts
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-body text-sm font-bold text-primary">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
