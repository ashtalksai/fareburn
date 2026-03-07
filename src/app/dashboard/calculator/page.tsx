"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, AlertCircle } from "lucide-react"

const programOptions = [
  "Chase Ultimate Rewards",
  "Amex Membership Rewards",
  "United MileagePlus",
  "Citi ThankYou Points",
  "Capital One Venture Miles",
  "Bilt Rewards",
]

interface Result {
  route: string
  points: string
  alt: string
  cabin: string
  airline: string
  valueScore: number
}

const sampleResults: Result[] = [
  {
    route: "New York (JFK) → London (LHR)",
    points: "60,000 United MileagePlus",
    alt: "or 60,000 Chase UR",
    cabin: "Business",
    airline: "United Airlines",
    valueScore: 4.8,
  },
  {
    route: "New York (JFK) → Paris (CDG)",
    points: "70,000 Amex MR",
    alt: "or via Air France Flying Blue",
    cabin: "Business",
    airline: "Air France",
    valueScore: 4.5,
  },
  {
    route: "New York (JFK) → Tokyo (HND)",
    points: "85,000 Amex MR → ANA",
    alt: "Transfer: Amex → ANA Mileage Club",
    cabin: "Business",
    airline: "ANA",
    valueScore: 5.0,
  },
  {
    route: "New York (JFK) → Dubai (DXB)",
    points: "136,000 Chase UR → Emirates",
    alt: "Best value via Skywards",
    cabin: "First",
    airline: "Emirates",
    valueScore: 4.2,
  },
]

export default function CalculatorPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([
    "Chase Ultimate Rewards",
    "Amex Membership Rewards",
  ])
  const [balances, setBalances] = useState<Record<string, string>>({
    "Chase Ultimate Rewards": "100000",
    "Amex Membership Rewards": "75000",
  })
  const [origin, setOrigin] = useState("JFK")
  const [destination, setDestination] = useState("LHR")
  const [cabin, setCabin] = useState("Business")
  const [results, setResults] = useState<Result[] | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login")
  }, [status, router])

  if (status === "loading" || !session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const calculate = () => setResults(sampleResults)

  const toggleProgram = (p: string) => {
    if (selectedPrograms.includes(p)) {
      setSelectedPrograms(selectedPrograms.filter((x) => x !== p))
      const newBal = { ...balances }
      delete newBal[p]
      setBalances(newBal)
    } else {
      setSelectedPrograms([...selectedPrograms, p])
      setBalances({ ...balances, [p]: "0" })
    }
  }

  return (
    <div className="p-6 lg:p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="font-display text-2xl text-foreground mb-1">
          Points-to-Seat Calculator
        </h1>
        <p className="font-body text-sm text-muted-foreground">
          Enter your balances and destination to see every redemption option, ranked by value.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Left: Input */}
        <div className="lg:col-span-2 space-y-6">
          {/* Programs */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-body text-sm font-semibold text-foreground mb-3">
              My Loyalty Programs
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {programOptions.map((p) => (
                <button
                  key={p}
                  onClick={() => toggleProgram(p)}
                  className={`text-xs font-body px-3 py-1.5 rounded-full border transition-colors ${
                    selectedPrograms.includes(p)
                      ? "bg-primary/10 border-primary text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {selectedPrograms.map((p) => (
              <div key={p} className="mb-3">
                <label className="font-body text-xs text-muted-foreground mb-1 block">
                  {p} Balance
                </label>
                <input
                  type="number"
                  value={balances[p] || ""}
                  onChange={(e) =>
                    setBalances({ ...balances, [p]: e.target.value })
                  }
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-mono text-foreground focus:outline-none focus:border-primary"
                />
              </div>
            ))}
          </div>

          {/* Route */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-body text-sm font-semibold text-foreground mb-3">
              Desired Route
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">
                  From
                </label>
                <input
                  type="text"
                  placeholder="e.g. JFK"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-body text-foreground uppercase focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground mb-1 block">
                  To
                </label>
                <input
                  type="text"
                  placeholder="e.g. LHR"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-body text-foreground uppercase focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <h3 className="font-body text-sm font-semibold text-foreground mb-3">
              Cabin Class
            </h3>
            <div className="flex gap-0 border border-border rounded-lg overflow-hidden mb-4">
              {["Economy", "Business", "First"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCabin(c)}
                  className={`flex-1 py-2 text-sm font-body font-semibold transition-colors ${
                    cabin === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-lg hover:bg-[#F0B030] transition-colors"
            >
              Calculate Seats
            </button>
          </div>
        </div>

        {/* Right: Results */}
        <div className="lg:col-span-3">
          {results ? (
            <div>
              <h3 className="font-body text-sm font-semibold text-foreground mb-4">
                Your Points Can Get You:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {results.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-card border rounded-xl p-5 ${
                      i === 0 ? "border-primary amber-glow-sm" : "border-border"
                    }`}
                  >
                    {i === 0 && (
                      <p className="font-body text-xs font-bold text-primary mb-2">
                        Option {i + 1}: High Value
                      </p>
                    )}
                    <p className="font-body text-sm font-semibold text-foreground mb-2">
                      {r.route}
                    </p>
                    <p className="font-mono text-sm text-primary font-bold mb-1">
                      {r.points}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mb-3">
                      {r.alt}
                    </p>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex justify-between text-xs font-body">
                        <span className="text-muted-foreground">Cabin</span>
                        <span className="text-foreground">{r.cabin}</span>
                      </div>
                      <div className="flex justify-between text-xs font-body">
                        <span className="text-muted-foreground">Partner Airline</span>
                        <span className="text-foreground">{r.airline}</span>
                      </div>
                      <div className="flex justify-between text-xs font-body items-center">
                        <span className="text-muted-foreground">Value Score</span>
                        <span className="flex items-center gap-1">
                          {Array.from({ length: Math.floor(r.valueScore) }).map(
                            (_, j) => (
                              <Star
                                key={j}
                                className="h-3 w-3 fill-primary text-primary"
                              />
                            )
                          )}
                          <span className="text-foreground ml-1 font-mono">
                            {r.valueScore}/5
                          </span>
                        </span>
                      </div>
                    </div>
                    <button className="w-full bg-primary text-primary-foreground font-body text-xs font-semibold py-2 rounded-lg hover:bg-[#F0B030] transition-colors">
                      Set Alert
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[300px]">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="font-body text-sm text-muted-foreground">
                  Enter your points and destination, then click &ldquo;Calculate
                  Seats&rdquo; to see your options.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
