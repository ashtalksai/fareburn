"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Send, Mail, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="font-body text-muted-foreground max-w-md mx-auto">
                Have a question, feedback, or partnership inquiry? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact info */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <Mail className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-body text-sm font-semibold text-foreground mb-1">Email</h3>
                  <p className="font-body text-sm text-muted-foreground">hello@fareburn.com</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <MessageSquare className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-body text-sm font-semibold text-foreground mb-1">Support</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Starter and Corporate plans get priority support with &lt;4hr response time.
                  </p>
                </div>
              </div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                {sent ? (
                  <div className="bg-card border border-primary/30 rounded-xl p-8 text-center">
                    <Send className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl text-foreground mb-2">Message Sent!</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
                    <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
                    <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none" />
                    <button type="submit"
                      className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-lg hover:bg-[#F0B030] transition-colors inline-flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
