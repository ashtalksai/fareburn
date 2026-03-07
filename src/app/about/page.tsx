import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Eye } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Proactive > Reactive",
    description: "We alert you when opportunities open — you don't have to search. The best points geeks are the ones who act first.",
  },
  {
    icon: Shield,
    title: "Your Data Stays Yours",
    description: "We never sell your financial data. Your loyalty balances are encrypted at rest and in transit. Trust is non-negotiable.",
  },
  {
    icon: Eye,
    title: "Obsessively Precise",
    description: "Every transfer ratio is verified daily. Every award chart is cross-referenced. Precision is what separates good advice from great advice.",
  },
]

const timeline = [
  { year: "2024", event: "Concept & first beta", description: "The idea was born from frustration — sitting on 300k points with no idea when to use them." },
  { year: "2025", event: "AI engine development", description: "Built the matching engine that cross-references balances with real-time award availability." },
  { year: "2025", event: "Public beta launch", description: "First 1,000 users joined. Found $2.3M in untapped award value in the first month." },
  { year: "2026", event: "Full launch", description: "50+ airline and hotel partners. Real-time alerts. Transfer optimizer. The full vision realized." },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl text-foreground leading-[1.1] mb-6">
                We Built the Tool We Wished Existed
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                We were points enthusiasts who spent hours every week manually cross-referencing
                transfer partners, checking availability across airlines, and calculating optimal
                redemption paths. We knew there had to be a better way.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Fareburn was born from that frustration — and a simple question: &ldquo;What if
                my points could tell ME when the best seats are open?&rdquo;
              </p>
            </div>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/about-visual.png"
                alt="About Fareburn"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-4xl sm:text-5xl text-primary font-bold leading-tight">
                $48,000,000,000
              </p>
              <p className="font-body text-sm text-muted-foreground mt-2">
                in unused loyalty points — we exist to change that
              </p>
            </div>
            <div>
              <p className="font-body text-muted-foreground leading-relaxed">
                Americans are sitting on $48 billion in unused credit card and loyalty points.
                Not because they don&apos;t want to use them — but because the systems are designed
                to be confusing. Transfer partners, award charts, blackout dates, devaluations —
                it&apos;s a maze designed to make you give up.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mt-4">
                Fareburn uses AI to cut through that complexity. We connect to your loyalty accounts,
                scan award availability across airlines and hotels, and alert you when high-value
                redemptions open. No more searching. No more guessing. No more burning points.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-foreground text-center mb-16">
              How We Think
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6">
                  <v.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-body text-base font-semibold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-foreground text-center mb-16">
              Our Journey
            </h2>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="font-mono text-sm text-primary font-bold mb-1">
                      {item.year}
                    </p>
                    <h3 className="font-body text-base font-semibold text-foreground mb-2">
                      {item.event}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-border">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-card border border-border rounded-2xl p-12 amber-border-glow">
              <h2 className="font-display text-2xl text-foreground mb-4">
                Ready to Unlock Your Points Potential?
              </h2>
              <Link
                href="/tools/calculator"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-[#F0B030] transition-colors"
              >
                Try the Free Calculator
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
