import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "How to Get 10x Value from Your Chase Ultimate Rewards",
    excerpt: "Most people redeem Chase points for 1 cent each. With the right transfer strategy, you can get 10+ cents per point. Here's how.",
    date: "March 5, 2026",
    category: "Strategy",
    readTime: "8 min read",
  },
  {
    title: "The Complete Guide to Transfer Partners in 2026",
    excerpt: "Every major bank's transfer partners, ranked by value. Which airlines and hotels give you the most bang for your points?",
    date: "March 3, 2026",
    category: "Guide",
    readTime: "12 min read",
  },
  {
    title: "AwardWallet's Price Hike: What It Means for Points Trackers",
    excerpt: "AwardWallet doubled their prices in late 2024. Here's why users are looking for alternatives — and what to look for.",
    date: "February 28, 2026",
    category: "Industry",
    readTime: "5 min read",
  },
  {
    title: "5 First-Class Routes You Can Book for Under 100k Points",
    excerpt: "Flying first class doesn't have to cost a fortune in points. These 5 routes offer incredible value for points enthusiasts.",
    date: "February 25, 2026",
    category: "Deals",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl text-foreground mb-4">
                The Fareburn Blog
              </h1>
              <p className="font-body text-muted-foreground max-w-md mx-auto">
                Points strategies, industry analysis, and insider tips from the team that lives and breathes travel rewards.
              </p>
            </div>

            <div className="space-y-6">
              {posts.map((post, i) => (
                <article
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 hover:amber-border-glow transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      · {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 font-body text-sm text-primary font-semibold">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
