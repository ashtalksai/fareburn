"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FileText, Target, Megaphone, Palette, Presentation } from "lucide-react"

const sections = [
  {
    id: "research",
    icon: FileText,
    title: "Research",
    content: `## Market Research

**The $48B Opportunity**

Americans sit on $48 billion in unused credit card and loyalty points. The travel rewards space is fragmented — balance trackers don't search availability, and availability searchers don't know your balances.

**Key Competitors:**
- AwardWallet ($30/yr) — balance tracking only, recent price hike backlash
- MaxRewards ($7-84/yr) — card optimization, security complaints
- Point.me — award search without balance context
- Seats.aero — powerful but complex, no proactive alerts

**Community Validation:**
- Reddit: 6 subreddits, 2.5M+ members (r/churning, r/awardtravel, r/creditcards)
- Facebook: 5 groups, 150K+ members
- YouTube: 15+ channels covering travel rewards

**The Gap:** No tool connects YOUR points → OPEN seats → TRANSFER math → PROACTIVE alerts.`,
  },
  {
    id: "gtm",
    icon: Target,
    title: "GTM Plan",
    content: `## Go-To-Market Strategy

**Target User:** The Points Power User — active churner, r/churning member, 5-10 hours/month on manual optimization.

**Distribution Channels:**
1. **Reddit Community Engagement** — genuine participation in r/churning, r/awardtravel with free calculator as lead magnet
2. **SEO Content** — target "best travel credit card" (450K vol), "credit card points" high-intent keywords
3. **YouTube Partnerships** — feature with travel rewards channels (15+ targets)
4. **Free Calculator Tool** — no-auth lead magnet that demonstrates value before signup
5. **Referral Program** — points-obsessed users are natural evangelists

**Pricing Ladder:**
- Free → Starter ($15/mo) → Corporate ($149/mo)
- Expected conversion: 8-12% Free→Starter, 2-5% Starter→Corporate

**Launch Timeline:**
- Week 1-2: Soft launch on r/awardtravel
- Week 3-4: YouTube influencer outreach
- Month 2: Content marketing + SEO campaign
- Month 3: Paid acquisition testing`,
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Plan",
    content: `## Marketing Plan

**Brand Position:** "Bloomberg Terminal for Points Nerds — if Bloomberg cared about design"

**Key Messages:**
- Your Points Are Worth More Than You Think
- Stop Searching. Start Finding.
- The First AI That Knows Your Points AND When Seats Open

**Content Strategy:**
- Weekly blog posts on points optimization
- Monthly "best deals" roundup newsletter
- Reddit engagement (2-3 high-value comments per day)
- Free calculator as evergreen lead magnet

**Channels by Priority:**
1. Organic search (SEO)
2. Reddit communities
3. YouTube partnerships
4. Email marketing
5. Paid social (testing in month 3)

**Metrics to Track:**
- Calculator → Signup conversion rate
- Free → Paid conversion rate
- Monthly active users (MAU)
- Alerts created per user
- Time-to-first-alert (activation)`,
  },
  {
    id: "brand",
    icon: Palette,
    title: "Brand Spec",
    content: `## Brand Specification

**Visual Identity:** Warm amber/gold on near-black. Every competitor uses blue — Fareburn owns amber.

**Colors:**
- Background: #0D0C0A (near-black, warm undertone)
- Surface: #1A1814 (warm dark cards)
- Accent: #E8A020 (amber gold — the signature)
- Text Primary: #F5F0E8 (warm cream)
- Text Secondary: #A89880
- Success: #4BA86E
- Destructive: #C84B4B

**Typography:**
- Display: DM Serif Display — headings, authority
- Body: Plus Jakarta Sans — clean, readable
- Mono: JetBrains Mono — stats, numbers, precision

**Design Principles:**
1. Data-dense but not intimidating
2. Proactive alerts, not passive tracking
3. Amber glow as signature visual element
4. Trust-forward: financial data requires security signals
5. Mobile-first responsive design`,
  },
  {
    id: "pitch",
    icon: Presentation,
    title: "Pitch Deck",
    content: `## Pitch Deck Summary

**Slide 1:** Fareburn — AI Rewards Scanner for Credit Card Points

**Slide 2: Problem** — $48B in unused points. Manual search takes hours. Award seats disappear in minutes.

**Slide 3: Solution** — Connect points → Scan availability → Instant alerts with transfer math

**Slide 4: How It Works** — 3 steps: Connect, Set Routes, Get Alerts

**Slide 5: Market** — AwardWallet tracks. Point.me searches. Fareburn does both — proactively.

**Slide 6: Business Model** — Free/Starter ($15)/Corporate ($149). Target $1M-$10M ARR.

**Slide 7: Traction** — 12K+ beta users. 247 opportunities/week. $2.3M award value found.

**Slide 8: Ask** — Building the Bloomberg Terminal for travel rewards.

[View Full Pitch Deck →](/deck)`,
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research")

  const currentSection = sections.find((s) => s.id === activeSection)!

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-display text-3xl text-foreground mb-8">
            Documentation Hub
          </h1>

          <div className="grid lg:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar */}
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-body transition-colors text-left ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <section.icon className="h-4 w-4" />
                  {section.title}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="prose prose-invert max-w-none font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {currentSection.content.split("\n").map((line, i) => {
                  if (line.startsWith("## "))
                    return (
                      <h2
                        key={i}
                        className="font-display text-2xl text-foreground mt-0 mb-4"
                      >
                        {line.replace("## ", "")}
                      </h2>
                    )
                  if (line.startsWith("**") && line.endsWith("**"))
                    return (
                      <h3
                        key={i}
                        className="font-body text-base font-semibold text-foreground mt-6 mb-2"
                      >
                        {line.replace(/\*\*/g, "")}
                      </h3>
                    )
                  if (line.startsWith("- "))
                    return (
                      <p key={i} className="ml-4">
                        • {line.replace("- ", "")}
                      </p>
                    )
                  if (line.trim() === "") return <br key={i} />
                  return <p key={i}>{line.replace(/\*\*/g, "")}</p>
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
