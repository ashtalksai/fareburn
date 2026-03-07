"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Flame, LayoutDashboard, Bell, Layers, Calculator, Settings, LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Alerts", href: "/dashboard/alerts", icon: Bell },
  { name: "My Programs", href: "/dashboard", icon: Layers },
  { name: "Calculator", href: "/dashboard/calculator", icon: Calculator },
  { name: "Settings", href: "/dashboard", icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-60 bg-card border-r border-border min-h-screen">
      {/* Logo */}
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm font-bold text-primary tracking-widest uppercase">
            FAREBURN
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-colors",
                isActive
                  ? "bg-primary/10 text-primary border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-border">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors w-full"
        >
          <LogOut className="h-5 w-5" />
          Log Out
        </button>
      </div>
    </aside>
  )
}
