"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  DollarSign,
  Bell,
  TrendingUp,
  Plane,
  Plus,
  ArrowUpRight,
  Trash2,
} from "lucide-react"

// Seed data for the MVP demo
const seedOpportunities = [
  {
    route: "NYC → Tokyo",
    cabin: "Business",
    points: "65,000 United",
    value: "$4,200",
    status: "OPEN",
    expiry: "Expires in 3 days",
  },
  {
    route: "LAX → Paris",
    cabin: "First",
    points: "88,000 Amex MR",
    value: "$8,500",
    status: "OPEN",
    expiry: "Expires in 1 day",
  },
  {
    route: "SFO → London",
    cabin: "Business",
    points: "57,500 Chase UR",
    value: "$3,800",
    status: "OPEN",
    expiry: "Expires in 5 days",
  },
  {
    route: "JFK → Dubai",
    cabin: "First",
    points: "115,000 Capital One",
    value: "$12,000",
    status: "OPEN",
    expiry: "Expires in 2 days",
  },
]

const defaultPrograms = [
  { name: "Chase Ultimate Rewards", balance: 125000 },
  { name: "Amex Membership Rewards", balance: 88000 },
  { name: "United MileagePlus", balance: 65000 },
]

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [programs, setPrograms] = useState(defaultPrograms)
  const [newProgram, setNewProgram] = useState("")
  const [newBalance, setNewBalance] = useState("")
  const [showAdd, setShowAdd] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!session) return null

  const totalValue = programs.reduce((sum, p) => sum + Math.round(p.balance * 0.017), 0)

  const stats = [
    {
      label: "TOTAL POINTS VALUE",
      value: `$${totalValue.toLocaleString()}`,
      change: "+4.2% this week",
      positive: true,
      icon: DollarSign,
    },
    {
      label: "ACTIVE ALERTS",
      value: "12",
      change: "+2 new",
      positive: true,
      icon: Bell,
    },
    {
      label: "OPPORTUNITIES THIS WEEK",
      value: "38",
      change: "+15% from last week",
      positive: true,
      icon: TrendingUp,
    },
    {
      label: "BEST CURRENT DEAL",
      value: "NYC→Paris",
      change: "Expires in 1 day",
      positive: false,
      icon: Plane,
    },
  ]

  const addProgram = () => {
    if (newProgram && newBalance) {
      setPrograms([
        ...programs,
        { name: newProgram, balance: parseInt(newBalance) || 0 },
      ])
      setNewProgram("")
      setNewBalance("")
      setShowAdd(false)
    }
  }

  const removeProgram = (index: number) => {
    setPrograms(programs.filter((_, i) => i !== index))
  }

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl text-foreground mb-1">
          Welcome back, {session.user?.name || "Explorer"}
        </h1>
        <p className="font-body text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening with your points today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-5 border-t-2 border-t-primary"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                {stat.label}
              </p>
              <stat.icon className="h-4 w-4 text-primary" />
            </div>
            <p className="font-body text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </p>
            <p
              className={`font-mono text-xs ${
                stat.positive ? "text-success" : "text-destructive"
              }`}
            >
              {stat.positive ? "↗" : "⏰"} {stat.change}
            </p>
            {/* Mini sparkline */}
            <div className="mt-3 h-6 flex items-end gap-[2px]">
              {[25, 40, 30, 50, 35, 60, 45, 55, 65, 50, 70].map((h, j) => (
                <div
                  key={j}
                  className="flex-1 bg-primary/30 rounded-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Programs */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-body text-sm font-semibold text-foreground">
                My Programs
              </h2>
              <button
                onClick={() => setShowAdd(!showAdd)}
                className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {showAdd && (
              <div className="mb-4 space-y-2 p-3 bg-secondary/30 rounded-lg">
                <input
                  type="text"
                  placeholder="Program name"
                  value={newProgram}
                  onChange={(e) => setNewProgram(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-xs font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <input
                  type="number"
                  placeholder="Balance"
                  value={newBalance}
                  onChange={(e) => setNewBalance(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-xs font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <button
                  onClick={addProgram}
                  className="w-full bg-primary text-primary-foreground font-body text-xs font-semibold py-2 rounded-lg hover:bg-[#F0B030]"
                >
                  Add Program
                </button>
              </div>
            )}

            <div className="space-y-3">
              {programs.map((program, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-secondary/30 rounded-lg px-4 py-3 group"
                >
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      {program.name}
                    </p>
                    <p className="font-mono text-xs text-primary">
                      {program.balance.toLocaleString()} pts
                    </p>
                  </div>
                  <button
                    onClick={() => removeProgram(i)}
                    className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Opportunities */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-body text-sm font-semibold text-foreground">
                Top Opportunities
              </h2>
              <a
                href="/dashboard/alerts"
                className="text-xs text-primary font-body hover:underline"
              >
                View All →
              </a>
            </div>

            <div className="space-y-3">
              {seedOpportunities.map((opp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-between bg-secondary/30 rounded-xl px-4 py-3 hover:amber-border-glow transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        {opp.route}{" "}
                        <span className="text-muted-foreground font-normal">
                          {opp.cabin}
                        </span>
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {opp.points}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm font-bold text-primary">
                      {opp.value}
                    </p>
                    <p className="font-body text-xs text-destructive">
                      {opp.expiry}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-body font-bold px-3 py-1 rounded-full ml-3">
                    <ArrowUpRight className="h-3 w-3" />
                    {opp.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
