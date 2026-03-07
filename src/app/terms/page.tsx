import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl text-foreground mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-invert max-w-none font-body text-sm text-muted-foreground leading-relaxed space-y-6">
              <p className="text-xs text-muted-foreground">Last updated: March 2026</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">1. Service Description</h2>
              <p>Fareburn is an AI-powered rewards scanning service that helps users find optimal redemption opportunities for their credit card and loyalty program points. We provide alerts, transfer calculations, and value scoring for award redemptions across 50+ airline and hotel programs.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">2. Account Registration</h2>
              <p>You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials. You must be at least 18 years old to use Fareburn.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">3. Subscription Plans</h2>
              <p>Fareburn offers Free, Starter ($15/month), and Corporate ($149/month) plans. Paid plans are billed monthly or annually. You may cancel at any time — no contracts, no penalties. Refunds are available within 14 days of your first payment.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">4. Accuracy Disclaimer</h2>
              <p>While we strive for accuracy, award availability and transfer ratios can change without notice from airline and hotel programs. Fareburn is an informational tool — we do not guarantee that any specific award seat will be available at the time of booking. Always verify availability directly with the airline or hotel before transferring points.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">5. User Responsibilities</h2>
              <p>You are responsible for the accuracy of the loyalty program balances you enter. You agree not to use automated systems to scrape or overload our service. You agree not to share your account access with others (except on Corporate plans with authorized team members).</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">6. Intellectual Property</h2>
              <p>All content, algorithms, and design elements of Fareburn are proprietary. You may not copy, modify, or reverse-engineer any part of the service. Airline and hotel program names are trademarks of their respective owners.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">7. Limitation of Liability</h2>
              <p>Fareburn is not responsible for any losses resulting from point transfers, bookings, or missed opportunities based on our recommendations. Our total liability is limited to the amount you paid for the service in the 12 months preceding any claim.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">8. Modifications</h2>
              <p>We may modify these terms at any time. We will notify you of material changes via email or in-app notification at least 30 days before they take effect. Continued use after changes constitutes acceptance.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">9. Contact</h2>
              <p>For questions about these terms, contact us at legal@fareburn.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
