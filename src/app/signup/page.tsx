"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Flame, Eye, EyeOff, Globe, Shield, Bell } from "lucide-react"
import { motion } from "framer-motion"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "Something went wrong")
        setLoading(false)
        return
      }

      // Auto sign in after signup
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Account created but sign-in failed. Please log in manually.")
        setLoading(false)
        return
      }

      router.push("/dashboard")
    } catch {
      setError("Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left — Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Flame className="h-6 w-6 text-primary" />
              <span className="font-display text-xl text-primary italic">
                Fareburn
              </span>
            </div>

            <h1 className="font-display text-2xl text-foreground text-center mb-8">
              Start Scanning Your Points
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 pr-10 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {error && (
                <p className="text-sm text-destructive font-body">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-lg hover:bg-[#F0B030] transition-colors disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Create Free Account"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground font-body">
                or continue with
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full border border-border bg-background text-foreground font-body font-semibold py-3 rounded-lg hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <p className="text-xs text-muted-foreground text-center mt-6 font-body">
              Your financial data is encrypted and never sold.
            </p>

            <p className="text-sm text-muted-foreground text-center mt-4 font-body">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:underline font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right — Social Proof (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-card/50 border-l border-border relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="max-w-md px-8 relative">
          <h2 className="font-display text-3xl text-primary mb-8">
            Join 12,000+ points optimizers
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                icon: Globe,
                text: "247 award opportunities found this week",
              },
              {
                icon: Shield,
                text: "Average user finds $2,400 in untapped value",
              },
              {
                icon: Bell,
                text: "Real-time alerts when your routes open",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4"
              >
                <item.icon className="h-6 w-6 text-primary shrink-0" />
                <p className="font-body text-sm text-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-primary pl-4">
            <p className="font-display text-sm text-primary italic leading-relaxed">
              &ldquo;Fareburn found me a first-class ticket to Tokyo using
              points I didn&apos;t even know I had. Game changer.&rdquo;
            </p>
            <footer className="mt-2 font-body text-xs text-muted-foreground">
              — Sarah K., Points Enthusiast
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
