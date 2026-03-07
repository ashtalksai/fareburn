import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl text-foreground mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-invert max-w-none font-body text-sm text-muted-foreground leading-relaxed space-y-6">
              <p className="text-xs text-muted-foreground">Last updated: March 2026</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">1. Information We Collect</h2>
              <p>When you create a Fareburn account, we collect your name, email address, and password. When you use our service, we collect the loyalty program balances and route preferences you provide. We do not connect to your bank accounts or access your financial credentials.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
              <p>We use your information to provide the Fareburn service — matching your loyalty points with available award seats, sending you alerts, and calculating optimal transfer paths. We do not sell your personal information to third parties. We do not share your loyalty balances with anyone.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">3. Data Security</h2>
              <p>Your data is encrypted at rest and in transit using industry-standard encryption (AES-256 and TLS 1.3). We use secure hosting infrastructure with regular security audits. Access to user data is restricted to essential personnel only.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">4. Cookies and Tracking</h2>
              <p>We use essential cookies to maintain your session and preferences. We use privacy-respecting analytics to understand how our service is used. We do not use third-party advertising trackers.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">5. Data Retention</h2>
              <p>Your account data is retained while your account is active. If you delete your account, your data is permanently removed within 30 days. Alert history and calculation results are retained for 90 days for service improvement.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data at any time. You can export your data from your account settings. You can opt out of marketing emails while keeping your account active.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">7. Third-Party Services</h2>
              <p>We use Stripe for payment processing. Stripe handles your payment information directly — we never store your credit card details. We use email service providers to send alerts and notifications.</p>

              <h2 className="font-display text-xl text-foreground mt-8 mb-3">8. Contact</h2>
              <p>For privacy-related questions or data requests, contact us at privacy@fareburn.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
