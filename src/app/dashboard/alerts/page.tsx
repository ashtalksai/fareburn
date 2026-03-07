"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Bell, Plus, Trash2, Plane } from "lucide-react"

interface AlertItem {
  id: string
  origin: string
  destination: string
  cabin: string
  isActive: boolean
}

const seedAlerts: AlertItem[] = [
  { id: "1", origin: "JFK", destination: "NRT", cabin: "Business", isActive: true },
  { id: "2", origin: "LAX", destination: "CDG", cabin: "First", isActive: true },
  { id: "3", origin: "SFO", destination: "LHR", cabin: "Business", isActive: true },
  { id: "4", origin: "ORD", destination: "DXB", cabin: "First", isActive: false },
  { id: "5", origin: "JFK", destination: "SIN", cabin: "Business", isActive: true },
]

export default function AlertsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [alerts, setAlerts] = useState(seedAlerts)
  const [showAdd, setShowAdd] = useState(false)
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [cabin, setCabin] = useState("Business")

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

  const addAlert = () => {
    if (origin && destination) {
      setAlerts([
        ...alerts,
        {
          id: Date.now().toString(),
          origin: origin.toUpperCase(),
          destination: destination.toUpperCase(),
          cabin,
          isActive: true,
        },
      ])
      setOrigin("")
      setDestination("")
      setShowAdd(false)
    }
  }

  const toggleAlert = (id: string) => {
    setAlerts(
      alerts.map((a) => (a.id === id ? { ...a, isActive: !a.isActive } : a))
    )
  }

  const deleteAlert = (id: string) => {
    setAlerts(alerts.filter((a) => a.id !== id))
  }

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl text-foreground mb-1">
            Award Alerts
          </h1>
          <p className="font-body text-sm text-muted-foreground">
            Get notified when premium seats open on your target routes.
          </p>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-4 py-2.5 rounded-full hover:bg-[#F0B030] transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Alert
        </button>
      </div>

      {showAdd && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-primary/30 rounded-xl p-6 mb-6"
        >
          <h3 className="font-body text-sm font-semibold text-foreground mb-4">
            Set Up New Alert
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="From (e.g. JFK)"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              maxLength={3}
              className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary uppercase"
            />
            <input
              type="text"
              placeholder="To (e.g. NRT)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              maxLength={3}
              className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary uppercase"
            />
            <select
              value={cabin}
              onChange={(e) => setCabin(e.target.value)}
              className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:border-primary"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>
          <button
            onClick={addAlert}
            className="bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-[#F0B030] transition-colors"
          >
            Create Alert
          </button>
        </motion.div>
      )}

      <div className="space-y-3">
        {alerts.map((alert, i) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`flex items-center justify-between bg-card border rounded-xl px-5 py-4 transition-all ${
              alert.isActive ? "border-border" : "border-border opacity-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  alert.isActive ? "bg-primary/10" : "bg-secondary"
                }`}
              >
                <Plane
                  className={`h-5 w-5 ${
                    alert.isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">
                  {alert.origin} → {alert.destination}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {alert.cabin} Class
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleAlert(alert.id)}
                className={`relative w-10 h-5 rounded-full transition-colors ${
                  alert.isActive ? "bg-primary" : "bg-border"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-foreground transition-transform ${
                    alert.isActive ? "left-5.5 translate-x-0" : "left-0.5"
                  }`}
                  style={{
                    transform: alert.isActive
                      ? "translateX(0)"
                      : "translateX(0)",
                    left: alert.isActive ? "22px" : "2px",
                  }}
                />
              </button>
              <button
                onClick={() => deleteAlert(alert.id)}
                className="text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {alerts.length === 0 && (
        <div className="text-center py-16">
          <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="font-body text-muted-foreground">
            No alerts yet. Create one to start tracking award availability.
          </p>
        </div>
      )}
    </div>
  )
}
