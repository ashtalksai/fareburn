"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  AlertTriangle,
  Zap,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  Rocket,
  Clock,
  Globe,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react"

/* ─── Slide Components ─── */

function TitleSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-5xl w-full relative z-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Flame className="h-10 w-10 text-primary" />
              <span className="font-display text-2xl text-foreground">Fareburn</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
              Your Points Are Worth{" "}
              <span className="text-primary">More Than You Think</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-lg mb-8">
              AI-powered award scanner that finds when your points unlock premium
              seats — and alerts you instantly.
            </p>
            <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              fareburn.ashketing.com
            </p>
          </div>

          {/* Right — Opportunity Counter Card */}
          <div className="bg-card border border-border rounded-2xl p-8 amber-border-glow">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Live Scanner
            </p>
            <div className="font-mono text-7xl font-bold text-primary mb-2">247</div>
            <p className="font-body text-sm text-muted-foreground mb-6">
              award opportunities found this week
            </p>
            <div className="space-y-3">
              {[
                { route: "NYC → NRT", cabin: "Business", pts: "68K ANA" },
                { route: "LAX → CDG", cabin: "First", pts: "85K AF" },
                { route: "JFK → LHR", cabin: "Business", pts: "57.5K BA" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-background/50 rounded-lg px-4 py-2.5 border border-border"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="font-mono text-xs text-foreground">
                      {item.route}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-primary">{item.pts}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProblemSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            The Problem
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
          Americans are sitting on{" "}
          <span className="text-primary font-mono">$48 billion</span> in unused
          loyalty points.
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl">
          People with points know they have them — they just never know when the right
          award seats open. And by the time they check, the seats are gone.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Clock className="w-5 h-5" />,
              title: "You have the points.",
              desc: "You don't know when award seats open.",
            },
            {
              icon: <BarChart3 className="w-5 h-5" />,
              title: "Transfer math is confusing.",
              desc: "Moving points between programs is time-consuming and complex.",
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: "Award seats vanish fast.",
              desc: "By the time you search, the space is gone.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {card.icon}
              </div>
              <h3 className="font-body font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-primary">$48B</div>
            <div className="font-body text-xs text-muted-foreground">Unused Points</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-primary">2.5M+</div>
            <div className="font-body text-xs text-muted-foreground">r/churning Members</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-primary">5-10 hrs</div>
            <div className="font-body text-xs text-muted-foreground">Manual Search / Month</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SolutionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-success" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            The Solution
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
          Fareburn bridges the gap.
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl">
          Fareburn connects your points balance to live award seat availability —
          runs the transfer math — and alerts you the moment a premium seat opens
          on a route you care about.
        </p>

        {/* Flow diagram */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {[
            { label: "Your Accounts", sub: "50+ programs" },
            { label: "Fareburn AI Scanner", sub: "24/7 monitoring" },
            { label: "Live Award Availability", sub: "Real-time data" },
            { label: "You Get Alerted", sub: "Email + SMS" },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-card border border-border rounded-xl px-6 py-4 text-center min-w-[160px]">
                <p className="font-body font-semibold text-foreground text-sm">
                  {step.label}
                </p>
                <p className="font-mono text-xs text-primary mt-1">{step.sub}</p>
              </div>
              {i < 3 && (
                <ArrowRight className="w-5 h-5 text-primary hidden md:block flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Differentiator */}
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
            The Differentiator
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-background rounded-lg p-4 border border-border">
              <p className="font-body font-semibold text-foreground text-sm">AwardWallet</p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Knows what you have. Doesn&apos;t find seats.
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border">
              <p className="font-body font-semibold text-foreground text-sm">Point.me</p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Finds seats. Doesn&apos;t know what you have.
              </p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
              <p className="font-body font-semibold text-primary text-sm">
                Fareburn ✦
              </p>
              <p className="font-body text-xs text-foreground mt-1">
                Knows what you have + finds open seats + transfer math + alerts you. The full loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MarketSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Market Opportunity
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-12">
          A massive, underserved market with{" "}
          <span className="text-primary">no dominant player</span>.
        </h2>

        {/* TAM/SAM/SOM */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary text-primary-foreground rounded-xl p-6">
            <span className="font-mono text-xs uppercase tracking-wider opacity-70">TAM</span>
            <div className="font-mono text-4xl font-bold mt-2">$47.96B</div>
            <p className="font-body text-sm mt-2 opacity-80">
              110M US rewards holders × $436 avg unused value
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">SAM</span>
            <div className="font-mono text-4xl font-bold text-foreground mt-2">$45M</div>
            <p className="font-body text-sm text-muted-foreground mt-2">
              1.5–3M engaged users × $15/mo
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">SOM (Y1)</span>
            <div className="font-mono text-4xl font-bold text-foreground mt-2">$450K</div>
            <p className="font-body text-sm text-muted-foreground mt-2">
              2,500 paid subs × $15/mo ARR
            </p>
          </div>
        </div>

        {/* Why Now */}
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            Why Now
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">AwardWallet raised prices 200%</span> — community backlash, users seeking alternatives
              </p>
            </div>
            <div className="flex gap-3">
              <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">Post-pandemic travel surge</span> — record award redemptions creating peak demand
              </p>
            </div>
            <div className="flex gap-3">
              <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">AI makes it viable</span> — real-time transfer math now economically feasible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HowItWorksSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            How It Works
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-12">
          Three steps. <span className="text-primary">Zero spreadsheets.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              step: "01",
              title: "Connect Your Programs",
              desc: "Enter your loyalty program balances — AAdvantage, Chase UR, Marriott Bonvoy, Hyatt, United, and 50+ more. Takes 30 seconds.",
            },
            {
              step: "02",
              title: "Set Your Routes",
              desc: "Tell Fareburn where you want to go. NYC → NRT. LAX → CDG. Any route, any cabin class. Set preferences once.",
            },
            {
              step: "03",
              title: "Get Alerted",
              desc: "Fareburn scans 24/7. The moment your points unlock a seat, you get an alert with the transfer math already done.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="font-mono text-6xl font-bold text-primary/20 mb-4">
                {item.step}
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Transfer Math Example */}
        <div className="bg-card border border-primary/20 rounded-xl p-6 amber-border-glow">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
            Example Alert
          </p>
          <p className="font-mono text-sm text-foreground leading-relaxed">
            You have <span className="text-primary">180,000 Chase UR</span> → transfer
            to ANA at 1:1 = 180,000 ANA miles → business class JFK → NRT ={" "}
            <span className="text-primary">68,000 miles</span>.{" "}
            <span className="text-success">You have enough. 3 seats available.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function TractionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Traction & Proof
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
          A community that does this manually.{" "}
          <span className="text-primary">A market waiting to be automated.</span>
        </h2>

        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl">
          These aren&apos;t passive users. r/churning members spend 5–10 hours/month
          doing manually what Fareburn automates. They are pre-sold on the value.
        </p>

        {/* Community signals */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-3">
            {[
              { name: "r/churning", members: "750K+", note: "Highest intent" },
              { name: "r/awardtravel", members: "300K+", note: "Award booking" },
              { name: "r/CreditCards", members: "2M+", note: "Card strategy" },
              { name: "Facebook Groups", members: "150K+", note: "5 groups" },
              { name: "YouTube", members: "15 channels", note: "7/10 score" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-card border border-border rounded-lg px-4 py-3"
              >
                <span className="font-body text-sm text-foreground">{item.name}</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-primary">{item.members}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.note}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* IdeaBrowser Scores */}
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              IdeaBrowser Scores
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Opportunity", score: "9/10" },
                { label: "Problem", score: "9/10" },
                { label: "Feasibility", score: "8/10" },
                { label: "Why Now", score: "9/10" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="font-mono text-2xl font-bold text-primary">
                    {item.score}
                  </div>
                  <div className="font-body text-xs text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 text-center">
              <div className="font-mono text-3xl font-bold text-primary">84/100</div>
              <div className="font-body text-sm text-success font-semibold mt-1">
                Strong GO ✓
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BusinessModelSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Business Model
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-12">
          Freemium SaaS with{" "}
          <span className="text-primary">natural B2B expansion</span>.
        </h2>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-body font-semibold text-foreground mb-1">Free</h3>
            <div className="font-mono text-3xl font-bold text-foreground mb-4">
              $0<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-3">Curious Accumulators</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> 1 loyalty program
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> Basic calculator
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> No alerts
              </li>
            </ul>
          </div>

          <div className="bg-card border-2 border-primary rounded-xl p-6 relative amber-border-glow">
            <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-mono">
              MOST POPULAR
            </span>
            <h3 className="font-body font-semibold text-foreground mb-1">Starter</h3>
            <div className="font-mono text-3xl font-bold text-foreground mb-4">
              $15<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="font-body text-sm text-primary mb-3">Points Power Users</p>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> Unlimited programs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> Email + SMS alerts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> Transfer optimizer
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-body font-semibold text-foreground mb-1">Corporate</h3>
            <div className="font-mono text-3xl font-bold text-foreground mb-4">
              $149<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-3">Finance/Travel Managers</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> 25-seat team dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> Slack alerts + API
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span> Priority support
              </li>
            </ul>
          </div>
        </div>

        {/* Unit economics */}
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { value: "$300", label: "LTV (Starter)" },
            { value: "<$30", label: "CAC Target" },
            { value: "10:1", label: "LTV:CAC" },
            { value: "$808K", label: "Year 2 ARR" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-2xl font-bold text-primary">{item.value}</div>
              <div className="font-body text-xs text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CompetitionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Competition
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-12">
          Two camps. <span className="text-primary">Neither does what we do.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Balance Trackers */}
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Balance Trackers
            </p>
            <div className="space-y-3">
              {[
                { name: "AwardWallet", price: "$30/yr", gap: "No award search. Just raised prices — backlash." },
                { name: "MaxRewards", price: "$84/yr", gap: "Card optimization, not award redemption." },
                { name: "CardPointers", price: "Free+", gap: "Terrible UI. No award search." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-body font-semibold text-foreground text-sm">{item.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{item.price}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground">{item.gap}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Search Tools */}
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Award Search Tools
            </p>
            <div className="space-y-3">
              {[
                { name: "Point.me", price: "Sub", gap: "Manual search. No alerts. No balance awareness." },
                { name: "Seats.aero", price: "Premium", gap: "Power users only. No balance connection." },
                { name: "Roame", price: "Sub", gap: "Same limitations. No proactive alerts." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-body font-semibold text-foreground text-sm">{item.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{item.price}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground">{item.gap}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2x2 Matrix */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="grid grid-cols-[auto_1fr_1fr] gap-0 text-center">
            <div className="p-3" />
            <div className="p-3 font-mono text-xs text-muted-foreground border-b border-border">
              KNOWS YOUR BALANCE
            </div>
            <div className="p-3 font-mono text-xs text-muted-foreground border-b border-border">
              DOESN&apos;T KNOW BALANCE
            </div>

            <div className="p-3 font-mono text-xs text-muted-foreground text-right border-r border-border">
              PROACTIVE ALERTS
            </div>
            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg m-1">
              <span className="font-body font-bold text-primary">Fareburn ✦</span>
              <p className="font-mono text-xs text-muted-foreground mt-1">Just us</p>
            </div>
            <div className="p-4 m-1">
              <span className="font-body text-sm text-muted-foreground">(nobody)</span>
            </div>

            <div className="p-3 font-mono text-xs text-muted-foreground text-right border-r border-border">
              MANUAL SEARCH
            </div>
            <div className="p-4 m-1">
              <span className="font-body text-sm text-muted-foreground">AwardWallet</span>
            </div>
            <div className="p-4 m-1">
              <span className="font-body text-sm text-muted-foreground">
                Point.me, Seats.aero
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GTMSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Go-To-Market
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-12">
          A built-in audience of{" "}
          <span className="text-primary">2.5M+ people</span> doing this manually.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border-l-4 border-l-primary border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
              Phase 1 — Month 1
            </p>
            <h3 className="font-body font-semibold text-foreground mb-3">
              Community Seeding
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>• r/churning launch thread (750K members)</li>
              <li>• r/awardtravel educational post</li>
              <li>• ProductHunt launch</li>
              <li>• Twitter/X influencer seeding</li>
            </ul>
            <p className="font-mono text-xs text-primary mt-4">Target: 100 trial signups W1</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">
              Phase 2 — Month 2-3
            </p>
            <h3 className="font-body font-semibold text-foreground mb-3">
              Content Moat
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>• SEO blog — &quot;transfer partners&quot; keywords</li>
              <li>• 450K monthly search vol, LOW competition</li>
              <li>• Free Points Calculator as link magnet</li>
              <li>• YouTube influencer deals</li>
            </ul>
            <p className="font-mono text-xs text-muted-foreground mt-4">Compounding organic traffic</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">
              Phase 3 — Month 3+
            </p>
            <h3 className="font-body font-semibold text-foreground mb-3">
              Paid Acquisition
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>• Google Ads: $500 test budget</li>
              <li>• Reddit ads: r/churning, r/awardtravel</li>
              <li>• Affiliate: $15/conversion</li>
              <li>• Scale proven channels</li>
            </ul>
            <p className="font-mono text-xs text-muted-foreground mt-4">$500 test → scale what works</p>
          </div>
        </div>

        {/* 90-day targets */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { period: "Week 1", target: "100 trials" },
            { period: "Month 1", target: "50 paid" },
            { period: "Month 3", target: "200 paid" },
            { period: "Month 6", target: "500 paid" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-xs text-muted-foreground mb-1">
                {item.period}
              </div>
              <div className="font-mono text-xl font-bold text-primary">{item.target}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TeamSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Team & Ask
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-12">
          Built by <span className="text-primary">ChimeStream</span> — the AI product
          studio that ships.
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8 mb-12">
          <div>
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h3 className="font-body font-semibold text-foreground mb-2">
                Ash Hatef — Founder
              </h3>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li>• Business/marketing background with deep GTM execution</li>
                <li>• Building ChimeStream as an AI-augmented product studio</li>
                <li>• Full pipeline: research → design → build → market → distribute</li>
                <li>• 2–5 day ship time from idea to live product</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-body font-semibold text-foreground mb-3">
                The Ask — Seed Funding
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-2xl font-bold text-primary">$150-300K</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">Seed round</p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-bold text-primary">$1M ARR</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">18-month target</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 font-body text-sm text-muted-foreground">
                <p>• 1 technical co-founder (award data API + balance sync)</p>
                <p>• $5K/mo paid acquisition budget</p>
                <p>• $3K/mo affiliate/content marketing</p>
              </div>
            </div>
          </div>

          {/* Bootstrap path */}
          <div className="bg-card border border-primary/20 rounded-xl p-6 amber-border-glow">
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              Bootstrap Path
            </p>
            <div className="space-y-6">
              {[
                { period: "Month 6", target: "$50K ARR", desc: "Organic channels" },
                { period: "Month 18", target: "$500K ARR", desc: "Revenue reinvested" },
                { period: "Year 3", target: "$1M+ ARR", desc: "Market leader" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="font-mono text-xs text-muted-foreground">{item.period}</div>
                  <div className="font-mono text-xl font-bold text-primary">{item.target}</div>
                  <div className="font-body text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WhyNowSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="max-w-5xl w-full relative z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Why Now
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl text-foreground mb-6 max-w-3xl mx-auto">
          The window is <span className="text-primary">open</span>.
        </h2>

        <p className="font-body text-lg text-muted-foreground mb-16 max-w-xl mx-auto">
          Three forces converging to create the perfect entry point.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Competitor Backlash",
              detail: "AwardWallet raised prices 200% in Dec 2024. Community fury. Users actively seeking alternatives RIGHT NOW.",
            },
            {
              title: "Peak Demand",
              detail: "Post-pandemic travel surge. Record award redemptions. People need intelligence tools more than ever.",
            },
            {
              title: "AI Makes It Viable",
              detail: "Real-time transfer math calculation is now economically feasible for the first time thanks to AI advances.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-display text-lg text-primary mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisionSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-8 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[200px]" />

      <div className="max-w-4xl w-full relative z-10 text-center">
        <Flame className="h-12 w-12 text-primary mx-auto mb-8" />
        <h2 className="font-display text-4xl sm:text-6xl text-foreground mb-6">
          The Bloomberg Terminal for{" "}
          <span className="text-primary">Travel Rewards</span>.
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
          Ready to unlock the $48B points opportunity? Let&apos;s build it — together.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">→</span> fareburn.ashketing.com
          </div>
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">→</span> ash@chimestream.co
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3">
          <span className="font-mono text-xs text-muted-foreground">Idea Score</span>
          <span className="font-mono text-lg font-bold text-primary">84/100</span>
          <span className="font-mono text-xs text-success">Strong GO ✓</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Deck ─── */

const slides = [
  { id: 0, component: <TitleSlide /> },
  { id: 1, component: <ProblemSlide /> },
  { id: 2, component: <SolutionSlide /> },
  { id: 3, component: <MarketSlide /> },
  { id: 4, component: <HowItWorksSlide /> },
  { id: 5, component: <TractionSlide /> },
  { id: 6, component: <BusinessModelSlide /> },
  { id: 7, component: <CompetitionSlide /> },
  { id: 8, component: <GTMSlide /> },
  { id: 9, component: <TeamSlide /> },
  { id: 10, component: <WhyNowSlide /> },
  { id: 11, component: <VisionSlide /> },
]

export default function DeckPage() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(
    () => setCurrent((c) => Math.max(0, c - 1)),
    []
  )
  const next = useCallback(
    () => setCurrent((c) => Math.min(slides.length - 1, c + 1)),
    []
  )

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        next()
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next, prev])

  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full overflow-y-auto"
        >
          {slides[current].component}
        </motion.div>
      </AnimatePresence>

      {/* Logo watermark */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-2">
        <Flame className="h-5 w-5 text-primary" />
        <span className="font-display text-sm text-foreground/60">Fareburn</span>
      </div>

      {/* Slide counter */}
      <div className="fixed top-6 right-6 z-50">
        <span className="font-mono text-xs text-muted-foreground">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom controls */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Progress dots */}
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
