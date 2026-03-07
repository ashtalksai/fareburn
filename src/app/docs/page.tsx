"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import {
  FileText,
  Target,
  Megaphone,
  Palette,
  Presentation,
  ExternalLink,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  CheckCircle2,
  XCircle,
  Clock,
  Globe,
  Rocket,
  Zap,
  AlertTriangle,
  Menu,
  X,
} from "lucide-react"

/* ─── Research Section ─── */
function ResearchSection() {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h2 className="font-display text-2xl text-foreground mb-4">Executive Summary</h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          <strong className="text-foreground">GO.</strong> Fareburn is a high-conviction opportunity.
          The core insight: AwardWallet and MaxRewards track your points balances, while Point.me and
          Seats.aero search award availability — but nobody connects YOUR points to AVAILABLE SEATS
          and alerts you proactively. That&apos;s the gap Fareburn fills.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="font-mono text-2xl font-bold text-primary">$48B</div>
            <div className="font-body text-xs text-muted-foreground">Unused US Points</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="font-mono text-2xl font-bold text-primary">84/100</div>
            <div className="font-body text-xs text-muted-foreground">Idea Score</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="font-mono text-2xl font-bold text-success">Strong GO</div>
            <div className="font-body text-xs text-muted-foreground">Verdict</div>
          </div>
        </div>
      </div>

      {/* IdeaBrowser Scores */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">IdeaBrowser Scores</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Opportunity", score: "9/10", grade: "Exceptional" },
            { label: "Problem", score: "9/10", grade: "Severe Pain" },
            { label: "Feasibility", score: "8/10", grade: "Manageable" },
            { label: "Why Now", score: "9/10", grade: "Perfect Timing" },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="font-mono text-xl font-bold text-primary">{item.score}</div>
              <div className="font-body text-sm font-semibold text-foreground">{item.label}</div>
              <div className="font-body text-xs text-muted-foreground">{item.grade}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-3">
            <div className="font-body text-xs text-muted-foreground">Revenue Potential</div>
            <div className="font-mono text-sm font-semibold text-foreground">$1M-$10M ARR</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-3">
            <div className="font-body text-xs text-muted-foreground">GTM Score</div>
            <div className="font-mono text-sm font-semibold text-foreground">9/10 — Viral Potential</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-3">
            <div className="font-body text-xs text-muted-foreground">Market Position</div>
            <div className="font-mono text-sm font-semibold text-primary">Category King</div>
          </div>
        </div>
      </div>

      {/* Market Size */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Market Opportunity</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-primary text-primary-foreground rounded-xl p-5">
            <span className="font-mono text-xs uppercase tracking-wider opacity-70">TAM</span>
            <div className="font-mono text-3xl font-bold mt-1">$47.96B</div>
            <div className="font-body text-sm opacity-80 mt-1">110M US rewards holders</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">SAM</span>
            <div className="font-mono text-3xl font-bold text-foreground mt-1">$22.5-45M</div>
            <div className="font-body text-sm text-muted-foreground mt-1">1.5-3M engaged users @ $15/mo</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">SOM (Y1)</span>
            <div className="font-mono text-3xl font-bold text-foreground mt-1">$450K</div>
            <div className="font-body text-sm text-muted-foreground mt-1">2,500 paid subs target</div>
          </div>
        </div>
      </div>

      {/* Competitive Landscape */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Competitive Landscape</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Balance Trackers</p>
            <div className="space-y-2">
              {[
                { name: "AwardWallet", price: "$30/yr", issue: "No award search. Just raised prices 200% — backlash." },
                { name: "MaxRewards", price: "$84/yr", issue: "Card optimization, not award redemption. Security concerns." },
                { name: "CardPointers", price: "Freemium", issue: "Credit card optimization. Known for terrible UI." },
              ].map((c, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-3">
                  <div className="flex justify-between mb-1">
                    <span className="font-body text-sm font-semibold text-foreground">{c.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{c.price}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground">{c.issue}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Award Search Tools</p>
            <div className="space-y-2">
              {[
                { name: "Point.me", price: "Subscription", issue: "Manual search only. No proactive alerts. No balance awareness." },
                { name: "Seats.aero", price: "Premium", issue: "Power user tool. Too advanced for most. No balance connection." },
                { name: "Roame", price: "Subscription", issue: "Same limitations — no balance awareness, no alerts." },
              ].map((c, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-3">
                  <div className="flex justify-between mb-1">
                    <span className="font-body text-sm font-semibold text-foreground">{c.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{c.price}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground">{c.issue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
          <p className="font-body text-sm text-foreground">
            <strong className="text-primary">Our Edge:</strong> Fareburn is the ONLY tool that connects your balance → to open award seats → with transfer math → and proactive alerts. Nobody does this full loop.
          </p>
        </div>
      </div>

      {/* Community Validation */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Community Validation</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { platform: "r/churning", size: "750K+", score: "Highest intent" },
            { platform: "r/awardtravel", size: "300K+", score: "Award booking" },
            { platform: "r/CreditCards", size: "2M+", score: "Card strategy" },
            { platform: "r/personalfinance", size: "18M+", score: "Broad audience" },
            { platform: "Facebook Groups", size: "150K+", score: "5 groups" },
            { platform: "YouTube", size: "15 channels", score: "7/10 score" },
          ].map((c, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-3">
              <div className="font-body text-sm font-semibold text-foreground">{c.platform}</div>
              <div className="font-mono text-lg font-bold text-primary">{c.size}</div>
              <div className="font-body text-xs text-muted-foreground">{c.score}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyword Data */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Search Validation</h3>
        <div className="space-y-2">
          {[
            { kw: "best travel rewards credit card", vol: "450K", comp: "LOW", growth: "" },
            { kw: "Southwest rapid rewards plus credit card", vol: "40.5K", comp: "—", growth: "+10,285%" },
            { kw: "award availability", vol: "High-intent", comp: "—", growth: "Rising" },
            { kw: "how to transfer chase points to airlines", vol: "High", comp: "LOW", growth: "" },
          ].map((k, i) => (
            <div key={i} className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-2.5">
              <span className="font-body text-sm text-foreground">{k.kw}</span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-primary">{k.vol}</span>
                {k.comp && <span className="font-mono text-xs text-success">{k.comp}</span>}
                {k.growth && <span className="font-mono text-xs text-primary">{k.growth}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── GTM Section ─── */
function GTMSection() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h2 className="font-display text-2xl text-foreground mb-4">Go-To-Market Plan</h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          Community-first distribution strategy targeting 2.5M+ people who already do this manually.
          Free Points-to-Seat Calculator as lead magnet → organic community seeding → content moat → paid acquisition.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="font-mono text-lg font-bold text-primary">$500</div>
            <div className="font-body text-xs text-muted-foreground">Month 1 Budget</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="font-mono text-lg font-bold text-primary">420-1,200</div>
            <div className="font-body text-xs text-muted-foreground">Expected Trials</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="font-mono text-lg font-bold text-primary">50+</div>
            <div className="font-body text-xs text-muted-foreground">Paid Subs M1</div>
          </div>
        </div>
      </div>

      {/* Target Persona */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Target Persona: The Points Power User</h3>
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">Who:</strong> Frequent business travelers, dedicated churners, 28–45 years old</p>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">Income:</strong> $80K–$200K+. Holds 5–15 credit cards simultaneously.</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground"><strong className="text-foreground">Time Spent:</strong> 5–10 hours/month manually checking award availability.</p>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border">
              <p className="font-body text-sm text-foreground italic">
                &quot;I know I have 180,000 Chase points. I just don&apos;t know when the RIGHT first-class seats open — and by the time I check, they&apos;re gone.&quot;
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-2">— Typical user pain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Channels */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Launch Channels</h3>
        <div className="space-y-3">
          {[
            {
              channel: "r/churning — Launch Thread",
              timing: "Week 1 (Tuesday 2PM EST)",
              why: "750K members, highest intent community. They already do what Fareburn automates.",
              expected: "50–200 upvotes, 20–80 trial signups",
            },
            {
              channel: "r/awardtravel — Educational Post",
              timing: "Week 2 (Thursday 11AM EST)",
              why: "300K members, award booking discussion. Educational thread with Fareburn woven in.",
              expected: "30–100 trial signups",
            },
            {
              channel: "Twitter/X — Influencer Seeding",
              timing: "Week 1",
              why: "Points community very active. 10 influencer accounts for early access + affiliate deals.",
              expected: "1 influencer tweet → 50–200 signups",
            },
            {
              channel: "ProductHunt — Launch Day",
              timing: "Week 3 (Tuesday 12:01AM PST)",
              why: "Tech audience includes power users. Target Product of the Day.",
              expected: "100–500 upvotes, 200–500 trial signups",
            },
            {
              channel: "YouTube Partnerships",
              timing: "Month 2",
              why: "Points With Crew, Prince of Travel, MileValue. Highly engaged subscribers.",
              expected: "1 review → 300–1,000 trial signups",
            },
          ].map((ch, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-body font-semibold text-foreground text-sm">{ch.channel}</span>
                <span className="font-mono text-xs text-primary">{ch.timing}</span>
              </div>
              <p className="font-body text-xs text-muted-foreground mb-2">{ch.why}</p>
              <p className="font-mono text-xs text-success">Expected: {ch.expected}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 90-Day Timeline */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">90-Day Timeline</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              period: "Week 1",
              title: "Seed & Launch",
              tasks: ["Set up Calculator tool", "r/churning launch thread", "DM 5 Twitter influencers", "Track signups & fix issues"],
            },
            {
              period: "Week 2-3",
              title: "Content Push",
              tasks: ["r/awardtravel educational post", "r/CreditCards thread", "ProductHunt launch", "2 tweets/day from @FareburnHQ"],
            },
            {
              period: "Month 2",
              title: "Content & Influencer",
              tasks: ["3 SEO blog posts", "2 YouTube influencer deals", "First email newsletter", "A/B test landing page"],
            },
            {
              period: "Month 3",
              title: "Paid Acquisition",
              tasks: ["$500/mo Google Ads test", "Reddit ads test", "Affiliate program launch", "Scale proven channels"],
            },
          ].map((phase, i) => (
            <div key={i} className={`border rounded-xl p-4 ${i === 0 ? "bg-card border-primary/30 border-l-4 border-l-primary" : "bg-card border-border"}`}>
              <div className="font-mono text-xs text-primary mb-1">{phase.period}</div>
              <div className="font-body font-semibold text-foreground text-sm mb-3">{phase.title}</div>
              <ul className="space-y-1.5">
                {phase.tasks.map((t, j) => (
                  <li key={j} className="font-body text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">•</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Strategy */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Pricing Strategy</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-body text-sm font-semibold text-foreground">Free</div>
            <div className="font-mono text-2xl font-bold text-foreground">$0</div>
            <div className="font-body text-xs text-muted-foreground mt-1">Curious Accumulator — 1 program, calculator, no alerts</div>
          </div>
          <div className="bg-card border-2 border-primary rounded-xl p-4 amber-border-glow">
            <div className="font-body text-sm font-semibold text-primary">Starter ★</div>
            <div className="font-mono text-2xl font-bold text-foreground">$15/mo</div>
            <div className="font-body text-xs text-muted-foreground mt-1">Points Power User — unlimited programs, alerts, optimizer</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-body text-sm font-semibold text-foreground">Corporate</div>
            <div className="font-mono text-2xl font-bold text-foreground">$149/mo</div>
            <div className="font-body text-xs text-muted-foreground mt-1">Teams up to 25, Slack alerts, API access</div>
          </div>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          <strong className="text-foreground">Price Anchor:</strong> AwardWallet just raised from $10/yr to $30/yr ($2.50/mo). Fareburn at $15/mo is 6× more but delivers 100× more value — not just tracking, active intelligence and alerts.
        </p>
      </div>

      {/* Revenue Targets */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Revenue Targets</h3>
        <div className="space-y-2">
          {[
            { period: "Month 1", subs: "50 Starter", mrr: "$750" },
            { period: "Month 3", subs: "200 Starter + 5 Corp", mrr: "$3,745" },
            { period: "Month 6", subs: "500 Starter + 20 Corp", mrr: "$10,480" },
            { period: "Year 1", subs: "800 Starter + 40 Corp", mrr: "$17,960 → $215K ARR" },
            { period: "Year 2", subs: "3,000 Starter + 150 Corp", mrr: "$67,350 → $808K ARR" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-2.5">
              <span className="font-body text-sm text-foreground">{r.period}</span>
              <span className="font-body text-xs text-muted-foreground">{r.subs}</span>
              <span className="font-mono text-sm font-semibold text-primary">{r.mrr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h3 className="font-display text-xl text-foreground mb-4">Success Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { metric: "Week 1 Trials", target: "100" },
            { metric: "M1 Paid Subs", target: "50" },
            { metric: "Activation (7d)", target: "40%" },
            { metric: "Free→Paid (30d)", target: "20%" },
          ].map((m, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-xl font-bold text-primary">{m.target}</div>
              <div className="font-body text-xs text-muted-foreground">{m.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Marketing Section ─── */
function MarketingSection() {
  return (
    <div className="space-y-8">
      {/* Positioning */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h2 className="font-display text-2xl text-foreground mb-4">Marketing Plan</h2>
        <div className="space-y-2 font-body text-sm text-muted-foreground">
          <p><strong className="text-foreground">For</strong> points enthusiasts who waste hours manually checking award availability</p>
          <p><strong className="text-foreground">Who</strong> know they have points but never know when the right seats open</p>
          <p><strong className="text-primary">Fareburn</strong> is the AI intelligence layer</p>
          <p><strong className="text-foreground">That</strong> connects your balances to live award seat availability and proactively alerts you</p>
          <p><strong className="text-foreground">Unlike</strong> balance trackers (AwardWallet) or search tools (Point.me)</p>
          <p><strong className="text-foreground">We</strong> do both AND alert you when a match is found. The full loop, automated.</p>
        </div>
      </div>

      {/* Brand Voice */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Brand Voice</h3>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="font-body text-sm text-muted-foreground mb-4">
            <strong className="text-foreground">Tone:</strong> Authoritative but approachable. Like the smartest person at r/churning who explains things without being condescending. Data-confident. Specific. Never vague.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-mono text-xs text-success tracking-widest uppercase mb-2">We Say ✓</p>
              <ul className="space-y-1.5 font-body text-xs text-muted-foreground">
                <li>• &quot;Award opportunities&quot; (intelligence, not discounting)</li>
                <li>• &quot;Your points unlock&quot; (action-oriented)</li>
                <li>• &quot;Fareburn found&quot; (product as actor)</li>
                <li>• &quot;Before the seats are gone&quot; (urgency without alarm)</li>
                <li>• &quot;Transfer math&quot; (own this term)</li>
                <li>• &quot;The full loop&quot; (our unique position)</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-destructive tracking-widest uppercase mb-2">Never Say ✗</p>
              <ul className="space-y-1.5 font-body text-xs text-muted-foreground">
                <li>• &quot;Hack&quot; (overused travel blog word)</li>
                <li>• &quot;Maximize&quot; without specifics</li>
                <li>• &quot;We help you&quot; (passive)</li>
                <li>• &quot;Optimize your rewards journey&quot; (jargon)</li>
                <li>• &quot;Earn while you travel&quot; (credit card ad copy)</li>
                <li>• Exclamation marks every sentence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Content Strategy */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">SEO Content Strategy</h3>
        <div className="space-y-3">
          {[
            {
              title: "AwardWallet vs MaxRewards vs Fareburn",
              keyword: "awardwallet review 2026",
              traffic: "2K–5K visits/mo in 90 days",
              timing: "Week 2",
            },
            {
              title: "How to Transfer Chase Ultimate Rewards to Airlines",
              keyword: "chase ultimate rewards transfer partners",
              traffic: "5K–15K visits/mo in 6 months",
              timing: "Week 3",
            },
            {
              title: "When Do Award Seats Open? Complete Guide",
              keyword: "when do award seats open",
              traffic: "3K–8K visits/mo",
              timing: "Month 2",
            },
            {
              title: "The $48 Billion Problem: Why Most Americans Never Use Their Points",
              keyword: "unused credit card points",
              traffic: "10K+ if it lands on r/personalfinance",
              timing: "Month 2",
            },
            {
              title: "Best Travel Credit Cards for Award Seat Alerts 2026",
              keyword: "best travel rewards credit card (450K vol)",
              traffic: "Long-term SEO play, 6+ months",
              timing: "Month 3",
            },
          ].map((article, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="font-body font-semibold text-foreground text-sm">{article.title}</span>
                <span className="font-mono text-xs text-primary">{article.timing}</span>
              </div>
              <p className="font-mono text-xs text-muted-foreground">Target: {article.keyword}</p>
              <p className="font-mono text-xs text-success mt-1">Expected: {article.traffic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Email Strategy */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Email Welcome Sequence</h3>
        <div className="space-y-2">
          {[
            { day: "Day 0", subject: "Welcome — set your first alert in 60 seconds", type: "Onboarding" },
            { day: "Day 2", subject: "What your points could actually get you", type: "Value Demo" },
            { day: "Day 5", subject: "3 award seats found for your routes this week", type: "Proof" },
            { day: "Day 10", subject: "The churning community's favorite transfer trick", type: "Education" },
            { day: "Day 14", subject: "Trial ending — here's what you'd miss", type: "Upgrade" },
          ].map((email, i) => (
            <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-lg px-4 py-2.5">
              <span className="font-mono text-xs text-primary w-12">{email.day}</span>
              <span className="font-body text-sm text-foreground flex-1">{email.subject}</span>
              <span className="font-mono text-xs text-muted-foreground">{email.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Social Media — First 5 Posts</h3>
        <div className="space-y-3">
          {[
            {
              platform: "Twitter/X",
              content: "You have 180,000 Chase points. You want business class to Japan. You just don't know when the seats open. We built Fareburn to fix that. We scan 50+ programs. When YOUR points unlock a seat YOU want, you get an alert.",
            },
            {
              platform: "Twitter/X",
              content: "The r/churning community has 750,000 members. They spend 5+ hours/month manually checking award availability. That's 3.75M hours of human time per month. Wasted. We automated it.",
            },
            {
              platform: "Twitter/X",
              content: "There's $48 billion in unused US loyalty points sitting in accounts right now. Most will expire without being redeemed. Not because people don't want to travel. Because nobody told them when the seats opened.",
            },
          ].map((post, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4">
              <span className="font-mono text-xs text-primary mb-2 block">{post.platform}</span>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{post.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Copy Bank */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Brand Copy Bank</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">Primary Tagline</p>
            <p className="font-display text-lg text-primary">&quot;Your points are worth more than you think.&quot;</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">Secondary</p>
            <p className="font-display text-lg text-foreground">&quot;Find the award. Book the seat. Burn the miles.&quot;</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">CTA Buttons</p>
            <div className="space-y-1 font-body text-sm text-muted-foreground">
              <p>• &quot;Scan My Points Free →&quot;</p>
              <p>• &quot;See How It Works →&quot;</p>
              <p>• &quot;Start Getting Alerts →&quot;</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">Trust Badges</p>
            <div className="space-y-1 font-body text-sm text-muted-foreground">
              <p>• &quot;No credit card required&quot;</p>
              <p>• &quot;12,000+ travelers scanning&quot;</p>
              <p>• &quot;50+ programs monitored&quot;</p>
              <p>• &quot;Encrypted · Never sold&quot;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Budget */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h3 className="font-display text-xl text-foreground mb-4">Month 1 Budget</h3>
        <div className="space-y-2">
          {[
            { item: "Organic Reddit", cost: "$0", note: "Time investment only" },
            { item: "Organic Twitter/X", cost: "$0", note: "Time investment only" },
            { item: "ProductHunt", cost: "$0", note: "Organic" },
            { item: "Google Ads test", cost: "$500", note: "High-volume keywords" },
            { item: "Influencer (affiliate)", cost: "$0 upfront", note: "$15/conversion" },
          ].map((b, i) => (
            <div key={i} className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-2">
              <span className="font-body text-sm text-foreground">{b.item}</span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-primary">{b.cost}</span>
                <span className="font-mono text-xs text-muted-foreground">{b.note}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-border mt-2">
            <span className="font-body text-sm font-semibold text-foreground">Total</span>
            <span className="font-mono text-sm font-bold text-primary">$500</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Brand Section ─── */
function BrandSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl text-foreground mb-4">Brand & Design Spec</h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          &quot;Bloomberg Terminal for Points Nerds — if Bloomberg was designed by someone who actually cared about design.&quot;
          The unforgettable element: a live opportunity counter — a large amber number showing award opportunities found.
        </p>
      </div>

      {/* Color Palette */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Background", hex: "#0D0C0A", desc: "Near-black, warm undertone" },
            { name: "Surface", hex: "#1A1814", desc: "Warm dark cards" },
            { name: "Amber Gold", hex: "#E8A020", desc: "Signature accent" },
            { name: "Text Primary", hex: "#F5F0E8", desc: "Cream white" },
            { name: "Text Secondary", hex: "#A89880", desc: "Warm gray" },
            { name: "Border", hex: "#2E2820", desc: "Subtle warm" },
            { name: "Success", hex: "#4BA86E", desc: "Confirmations" },
            { name: "Destructive", hex: "#C84B4B", desc: "Errors/warnings" },
          ].map((color, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-border">
              <div className="h-16" style={{ backgroundColor: color.hex }} />
              <div className="p-3 bg-card">
                <div className="font-body text-sm font-semibold text-foreground">{color.name}</div>
                <div className="font-mono text-xs text-primary">{color.hex}</div>
                <div className="font-body text-xs text-muted-foreground">{color.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border rounded-lg p-4 mt-4">
          <p className="font-body text-sm text-muted-foreground">
            <strong className="text-foreground">Color Rationale:</strong> Every competitor uses blue. Fareburn owns amber.
            #0D0C0A is almost-black with warm brown undertone — premium, like aged leather.
            #E8A020 is amber gold — not yellow (cheap), not orange (loud). This is liquid gold.
          </p>
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Typography</h3>
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Display Font</p>
            <p className="font-display text-4xl text-foreground mb-2">DM Serif Display</p>
            <p className="font-display text-2xl text-foreground mb-2">Aa Bb Cc Dd Ee Ff Gg</p>
            <p className="font-body text-xs text-muted-foreground">H1, H2, hero headlines, section headings. Authority and elegance.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Body Font</p>
            <p className="font-body text-2xl text-foreground mb-2">Plus Jakarta Sans</p>
            <p className="font-body text-lg text-foreground mb-2">The quick brown fox jumps over the lazy dog</p>
            <p className="font-body text-xs text-muted-foreground">All body text, UI labels, nav items, buttons. Clean, modern, readable.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">Mono Font</p>
            <p className="font-mono text-2xl text-foreground mb-2">JetBrains Mono</p>
            <p className="font-mono text-lg text-foreground mb-2">0123456789 $48B 247 68K</p>
            <p className="font-body text-xs text-muted-foreground">Stats, numbers, point balances, route codes. Precision signals trust.</p>
          </div>
        </div>
      </div>

      {/* Type Scale */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Type Scale</h3>
        <div className="space-y-2">
          {[
            { token: "5xl", size: "80px", usage: "Opportunity counter stat" },
            { token: "4xl", size: "64px", usage: "Hero display text" },
            { token: "3xl", size: "48px", usage: "Page headings (H1)" },
            { token: "2xl", size: "32px", usage: "Section headings (H2)" },
            { token: "xl", size: "24px", usage: "Section subtitles" },
            { token: "base", size: "16px", usage: "Body text" },
            { token: "sm", size: "14px", usage: "Secondary text, metadata" },
            { token: "xs", size: "12px", usage: "Fine print, labels, tags" },
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-2">
              <span className="font-mono text-xs text-primary w-10">{t.token}</span>
              <span className="font-mono text-xs text-foreground w-12">{t.size}</span>
              <span className="font-body text-xs text-muted-foreground flex-1 text-right">{t.usage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing & Radius */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-display text-xl text-foreground mb-4">Spacing</h3>
          <div className="bg-card border border-border rounded-xl p-4 space-y-2 font-mono text-xs text-muted-foreground">
            <p>Base unit: <span className="text-foreground">4px</span></p>
            <p>Section padding: <span className="text-foreground">96px vertical</span> (48px mobile)</p>
            <p>Container max-width: <span className="text-foreground">1280px</span></p>
            <p>Content max-width: <span className="text-foreground">800px</span> (text-heavy)</p>
            <p>Sidebar width: <span className="text-foreground">240px</span></p>
            <p>Card padding: <span className="text-foreground">24px</span></p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl text-foreground mb-4">Border Radius</h3>
          <div className="bg-card border border-border rounded-xl p-4 space-y-2 font-mono text-xs text-muted-foreground">
            <p>Tiny: <span className="text-foreground">4px</span> — inputs, tags</p>
            <p>Small: <span className="text-foreground">8px</span> — small cards, buttons</p>
            <p>Medium: <span className="text-foreground">12px</span> — regular cards</p>
            <p>Large: <span className="text-foreground">16px</span> — hero cards, modals</p>
            <p>XL: <span className="text-foreground">20px</span> — featured cards</p>
            <p>Full: <span className="text-foreground">9999px</span> — badges, pills</p>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Design Principles</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Data-dense but not intimidating",
            "Proactive alerts, not passive tracking",
            "Amber glow as signature visual element",
            "Trust-forward: financial data requires security signals",
            "Mobile-first responsive design",
            "Alert-first UI — opportunities > balances",
          ].map((p, i) => (
            <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
              <span className="font-mono text-primary text-sm">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-body text-sm text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shadows */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Shadows & Elevation</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "shadow-sm", value: "0 1px 3px rgba(0,0,0,0.4)" },
            { name: "shadow-card", value: "0 4px 16px rgba(0,0,0,0.5)" },
            { name: "amber-glow", value: "0 0 24px rgba(232,160,32,0.2)" },
            { name: "amber-intense", value: "0 0 48px rgba(232,160,32,0.35)" },
          ].map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4">
              <p className="font-mono text-xs text-primary mb-1">{s.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Pitch Section ─── */
function PitchSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl text-foreground mb-4">Pitch Deck</h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          12-slide interactive pitch deck with Framer Motion animations, keyboard navigation, and mobile swipe support.
        </p>
        <a
          href="/deck"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          View Full Pitch Deck <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Slide Summary */}
      <div>
        <h3 className="font-display text-xl text-foreground mb-4">Slide-by-Slide Overview</h3>
        <div className="space-y-3">
          {[
            { num: "01", title: "Title", content: "Fareburn — \"Your points are worth more than you think.\" Live opportunity counter showing 247 awards found this week." },
            { num: "02", title: "Problem", content: "$48B in unused points. Manual search takes hours. Award seats disappear in minutes. 2.5M+ people doing this manually." },
            { num: "03", title: "Solution", content: "Connect points → Scan availability → Transfer math → Instant alerts. The full loop nobody else does." },
            { num: "04", title: "Market", content: "TAM $47.96B. SAM $22.5-45M. SOM Y1 $450K. AwardWallet backlash + post-pandemic surge + AI viability." },
            { num: "05", title: "How It Works", content: "3 steps: Connect programs (30 sec) → Set routes → Get alerted with transfer math done." },
            { num: "06", title: "Traction", content: "IdeaBrowser 84/100. 6 Reddit communities (2.5M+ members). 15 YouTube channels. Search validation." },
            { num: "07", title: "Business Model", content: "Free / Starter $15/mo / Corporate $149/mo. LTV $300. CAC <$30. LTV:CAC 10:1. Y2 target $808K ARR." },
            { num: "08", title: "Competition", content: "Balance trackers vs search tools. Fareburn alone in the \"knows balance + proactive alerts\" quadrant." },
            { num: "09", title: "Go-To-Market", content: "Community seeding (r/churning) → Content moat (SEO blog) → Paid acquisition ($500 test). 90-day plan." },
            { num: "10", title: "Team & Ask", content: "ChimeStream AI product studio. $150-300K seed → $1M ARR in 18 months. Bootstrap path to $500K ARR." },
            { num: "11", title: "Why Now", content: "AwardWallet 200% price hike. Post-pandemic travel surge. AI makes transfer math viable. Window is open." },
            { num: "12", title: "Vision", content: "The Bloomberg Terminal for Travel Rewards. $48B opportunity. Idea Score 84/100 — Strong GO." },
          ].map((slide, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-primary">{slide.num}</span>
                <span className="font-body font-semibold text-foreground text-sm">{slide.title}</span>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{slide.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design Notes */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-display text-xl text-foreground mb-3">Design Notes</h3>
        <ul className="space-y-2 font-body text-sm text-muted-foreground">
          <li>• All slides use brand tokens: #0D0C0A background, #E8A020 amber accent, #F5F0E8 text</li>
          <li>• DM Serif Display for headlines, Plus Jakarta Sans for body, JetBrains Mono for data</li>
          <li>• Subtle fade + slide transitions via Framer Motion (0.3s)</li>
          <li>• Keyboard navigation: Arrow keys + Space bar</li>
          <li>• Progress dots with active state indicator</li>
          <li>• Logo watermark top-left, slide counter top-right</li>
          <li>• Responsive — works on desktop and mobile</li>
        </ul>
      </div>
    </div>
  )
}

/* ─── Section Registry ─── */
const sections = [
  { id: "research", icon: FileText, title: "Research", component: <ResearchSection /> },
  { id: "gtm", icon: Target, title: "GTM Plan", component: <GTMSection /> },
  { id: "marketing", icon: Megaphone, title: "Marketing", component: <MarketingSection /> },
  { id: "brand", icon: Palette, title: "Brand Spec", component: <BrandSection /> },
  { id: "pitch", icon: Presentation, title: "Pitch Deck", component: <PitchSection /> },
]

/* ─── Main Docs Page ─── */
export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research")
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const currentSection = sections.find((s) => s.id === activeSection)!

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl md:text-3xl text-foreground">
                Fareburn — Documentation
              </h1>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Research, strategy, and brand guidelines
              </p>
            </div>
            {/* Mobile nav toggle */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar */}
            <nav
              className={`space-y-1 ${
                mobileNavOpen ? "block" : "hidden lg:block"
              }`}
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id)
                    setMobileNavOpen(false)
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-body transition-colors text-left ${
                    activeSection === section.id
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <section.icon className="h-4 w-4 flex-shrink-0" />
                  {section.title}
                </button>
              ))}

              {/* External links */}
              <div className="pt-4 mt-4 border-t border-border space-y-1">
                <a
                  href="/"
                  className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <Globe className="h-4 w-4 flex-shrink-0" />
                  Live Site
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
                <a
                  href="https://github.com/ashtalksai/fareburn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <FileText className="h-4 w-4 flex-shrink-0" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
                <a
                  href="/deck"
                  className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <Presentation className="h-4 w-4 flex-shrink-0" />
                  Full Deck
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </div>
            </nav>

            {/* Content */}
            <div className="min-w-0">
              {currentSection.component}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
