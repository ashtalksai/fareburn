"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Fareburn find award availability?",
    answer:
      "Fareburn uses an AI matching engine that cross-references your loyalty program balances with real-time award seat availability across 50+ airlines and hotel programs. When a seat opens that matches your points and route preferences, we alert you immediately.",
  },
  {
    question: "Is my financial data safe?",
    answer:
      "Absolutely. Your data is encrypted at rest and in transit. We never sell your information to third parties. For the MVP, you enter balances manually — we don't connect to your bank accounts. Your trust is our foundation.",
  },
  {
    question: "Which loyalty programs do you support?",
    answer:
      "We support all major transferable points currencies: Chase Ultimate Rewards, Amex Membership Rewards, Citi ThankYou Points, Capital One Venture Miles, Bilt Rewards, and their 50+ airline and hotel transfer partners.",
  },
  {
    question: "How is this different from AwardWallet or Point.me?",
    answer:
      "AwardWallet tracks balances but doesn't search availability. Point.me searches availability but doesn't know your balances. Fareburn is the first to combine both: YOUR POINTS → OPEN SEATS → TRANSFER MATH → PROACTIVE ALERTS. We're proactive, not reactive.",
  },
  {
    question: "Can I try Fareburn for free?",
    answer:
      "Yes! Our free tier lets you track one loyalty program and use the Points-to-Seat Calculator. No credit card required. Upgrade to Starter ($15/mo) when you're ready for unlimited programs and real-time alerts.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Cancel anytime from your dashboard — no contracts, no penalties, no awkward phone calls. Your data stays available for 30 days after cancellation.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:amber-border-glow transition-all"
            >
              <AccordionTrigger className="font-body text-sm font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
