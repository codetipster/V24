import { Logo } from "@/components/Logo";
import { Badge } from "@/components/Badge";
import { SocialLinks } from "@/components/SocialLinks";
import { Countdown } from "@/components/Countdown";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export default function Home() {
  const launchAt = process.env.LAUNCH_AT || "2025-12-01T00:00:00Z";
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#111827] to-[#003366]">
      {/* Scroll Progress Indicator */}
      <ScrollIndicator />
      
      {/* Animated Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#111827] to-[#003366]"></div>
        <div className="absolute inset-0 animate-bg-shift">
          <div className="absolute top-10 left-4 w-20 h-20 sm:top-20 sm:left-20 sm:w-32 sm:h-32 bg-[#14B8A6]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-4 w-24 h-24 sm:bottom-20 sm:right-20 sm:w-40 sm:h-40 bg-[#FFCC00]/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-[#14B8A6]/5 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-4 sm:p-6 lg:p-8">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Logo className="h-6 w-6 sm:h-8 sm:w-8" variant="dark" />
          <span className="text-lg sm:text-xl font-bold text-white tracking-tight">Vono24</span>
        </div>
        <Badge className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white">
          Coming Soon
        </Badge>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-20 lg:min-h-screen">
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Hero Badge */}
          <div className="flex justify-center">
            <div className="px-4 py-2 sm:px-8 sm:py-4 text-xs sm:text-sm text-[#FFCC00] font-medium bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Financial Services
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight px-2">
              The easiest way to
              <br />
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] bg-clip-text text-transparent">
                help your team—today
              </span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
              Add staff to Vono24. We pay; you reconcile. Done.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="hidden sm:block space-y-3 sm:space-y-6">
              <h2 className="text-lg sm:text-2xl font-semibold text-white mb-2 px-4">
                Become a pilot employer partner
              </h2>
              <p className="text-white/70 text-sm sm:text-lg max-w-2xl mx-auto px-4">
                Request a pilot and get early access for your company.
              </p>
            </div>
            <div className="hidden sm:block">
              <WaitlistForm />
            </div>
            
            {/* Key Features - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/60 text-xs sm:text-sm px-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>₦0 employer cost</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FFCC00] rounded-full"></div>
                <span>&lt;2 min payouts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>60% max advance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FFCC00] rounded-full"></div>
                <span>Automated payroll file</span>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-8 sm:mt-16">
            <p className="text-white/60 text-sm sm:text-lg mb-4 sm:mb-6">Expected Launch</p>
            <Countdown launchAt={launchAt} />
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative z-20 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            {/* Hero Dashboard Preview */}
            <div className="aspect-video bg-gradient-to-br from-[#003366] to-[#111827] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="text-center space-y-3 sm:space-y-4 relative z-10 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] rounded-2xl mx-auto flex items-center justify-center">
                  <Logo className="h-8 w-8 sm:h-10 sm:w-10" variant="dark" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Platform Preview</h3>
                <p className="text-white/60 text-sm sm:text-base">Employer &amp; Employee experience</p>
              </div>
              
              {/* Floating UI Elements - Responsive positioning */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-white/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#14B8A6] rounded-full"></div>
                  <span className="text-white/80 text-xs sm:text-sm">Live Balance</span>
                </div>
              </div>
              
              <div className="hidden sm:block absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-white/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FFCC00] rounded-full"></div>
                  <span className="text-white/80 text-xs sm:text-sm">Real-time Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-20 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
              Financial stress hurts retention
              <br />
              <span className="text-white/60">and productivity</span>
            </h2>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Many workers run out of cash before payday. They ask for salary advances or skip shifts. You handle requests over calls and chats, then manually deduct at payroll. Work slows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ProblemCard 
              title="Payday gaps"
              description="End‑of‑month pay creates cash gaps for transport, food and bills. Staff need money before payday."
              icon="⏰"
              delay="0"
            />
            <ProblemCard 
              title="Constant advance requests"
              description="You handle calls and messages for 'small advances' and track repayments by hand."
              icon="🧾"
              delay="100"
            />
            <ProblemCard 
              title="Lost time and focus"
              description="Cash stress leads to late arrivals, missed shifts and lower output."
              icon="😰"
              delay="200"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-20 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
              The simplest way to offer
              <br />
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] bg-clip-text text-transparent">
                earned wage access
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Add your staff. Vono24 pays up to 60% of what they've earned. You deduct at month‑end using our payroll file.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <FeatureHighlight 
                title="Employer Onboarding & Payroll"
                description="Upload staff via CSV or manual entry — no IT integration required at MVP."
                accent="[#14B8A6]"
              />
              <FeatureHighlight 
                title="Instant Advances (60% cap)"
                description="Employees can access up to 60% of earned wages in minutes. We handle disbursement."
                accent="[#FFCC00]"
              />
              <FeatureHighlight 
                title="Reconciliation & Compliance"
                description="Automated payroll deduction file and basic KYC/BVN checks for compliance."
                accent="[#14B8A6]"
              />
            </div>
            
            {/* Mobile App Preview - Responsive */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Logo className="h-5 w-5 sm:h-6 sm:w-6" variant="dark" />
                        <span className="text-white font-semibold text-sm sm:text-base">Vono24</span>
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFCC00] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#003366] rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Balance Card */}
                    <div className="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] rounded-2xl p-4 sm:p-6 text-white">
                      <p className="text-xs sm:text-sm opacity-90">Earned This Week</p>
                      <p className="text-xl sm:text-2xl font-bold">₦487,000.50</p>
                      <p className="text-xs opacity-75 mt-1 sm:mt-2">Available: ₦243,000.75</p>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-white/10">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#14B8A6] rounded-lg mx-auto mb-1 sm:mb-2"></div>
                        <p className="text-white/80 text-xs">Cash Out</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-white/10">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFCC00] rounded-lg mx-auto mb-1 sm:mb-2"></div>
                        <p className="text-white/80 text-xs">Schedule</p>
                      </div>
                    </div>
                    
                    {/* Recent Activity */}
                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-white/60 text-xs sm:text-sm">Recent Activity</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-1 sm:py-2">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#14B8A6] rounded-full"></div>
                            <div>
                              <p className="text-white text-xs sm:text-sm">Wages earned</p>
                              <p className="text-white/60 text-xs">Today, 8 hours</p>
                            </div>
                          </div>
                          <p className="text-[#14B8A6] text-xs sm:text-sm font-medium">+₦120</p>
                        </div>
                        <div className="flex items-center justify-between py-1 sm:py-2">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FFCC00] rounded-full"></div>
                            <div>
                              <p className="text-white text-xs sm:text-sm">Cash advance</p>
                              <p className="text-white/60 text-xs">Yesterday</p>
                            </div>
                          </div>
                          <p className="text-white/60 text-xs sm:text-sm">₦200</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements around the mockup */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#FFCC00]/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-[#14B8A6]/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 px-2">
              Built for
              <br />
              <span className="text-[#FFCC00]">working people</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            <AdvancedFeatureCard 
              title="Employer Onboarding"
              description="Secure login for HR. Add staff via CSV/Excel or manual entry with salary and bank details."
              features={["CSV/Excel upload", "Manual add", "Status updates"]}
            />
            <AdvancedFeatureCard 
              title="Instant Advances"
              description="On approval, payouts are initiated to employee bank accounts with a 60% cap."
              features={["<2 min payouts", "60% of accrued", "24/7 availability"]}
            />
            <AdvancedFeatureCard 
              title="Reconciliation"
              description="Download a monthly payroll file with per-employee deductions for seamless processing."
              features={["Automated file", "Aggregate insights (optional)", "Compliance ready"]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-2">
              How Vono24 works
            </h2>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Three simple steps — built for employers and employees
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            <StepCard 
              step="01"
              title="Onboard Your Staff"
              description="Upload employee list via CSV or manual entry with salary and bank details."
            />
            <StepCard 
              step="02"
              title="Employees Access Wages"
              description="Staff can access up to 60% of accrued wages, any time."
            />
            <StepCard 
              step="03"
              title="Payroll Reconciliation"
              description="At month end, apply the automated deduction file — zero extra admin."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 px-2">
            Built on trust, secured by design
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <TrustMetric number="₦0" label="Employer Cost" />
            <TrustMetric number="<2 min" label="Payout Time" />
            <TrustMetric number="60%" label="Max Advance" />
            <TrustMetric number="0" label="Extra Admin" />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-12">
            <p className="text-lg sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              "The worker-first operating system for Africa—wages, benefits, and policy delivered directly."
            </p>
            <div className="mt-6 sm:mt-8 text-white/60">
              <p className="font-medium">Vono24 Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 px-2">
            Ready to offer
            <br />
            <span className="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] bg-clip-text text-transparent">
              Earned Wage Access?
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Become a pilot employer partner. We'll help you onboard quickly — no IT integration required.
          </p>
          
          <div className="space-y-8">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative z-20 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">FAQs</h2>
            <p className="text-white/70">Straight answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <FAQItem q="Do employers have to fund advances?" a="No. Vono24 funds payouts. Employers simply apply the automated deduction file at payroll." />
            <FAQItem q="How fast are payouts?" a="Typically under 2 minutes after request, 24/7." />
            <FAQItem q="What's the maximum employees can access?" a="Up to 60% of accrued wages at the time of the request." />
            <FAQItem q="Who is this for?" a="SMEs (2–500 staff), gig platforms, and BPOs across Africa. Individuals and small teams can request access too." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <Logo className="h-6 w-6 sm:h-8 sm:w-8" variant="dark" />
                <span className="text-lg sm:text-xl font-bold text-white">Vono24</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Vono24 means promise — earned wages on demand, zero employer cost.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <SocialLinks />
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2025 Vono24. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Problem Card Component - Mobile Optimized
function ProblemCard({ title, description, icon, delay }: { 
  title: string; 
  description: string; 
  icon: string;
  delay: string;
}) {
  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-gradient-x"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Icon */}
      <div className="relative z-10 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFCC00] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

// Feature Highlight Component - Mobile Optimized
function FeatureHighlight({ title, description, accent }: { 
  title: string; 
  description: string; 
  accent: string;
}) {
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${accent} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
        </div>
        <h3 className="text-lg sm:text-2xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/70 text-sm sm:text-lg leading-relaxed pl-13 sm:pl-16">{description}</p>
    </div>
  );
}

// Advanced Feature Card Component - Mobile Optimized
function AdvancedFeatureCard({ title, description, features }: { 
  title: string; 
  description: string; 
  features: string[];
}) {
  return (
    <div className="group p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Image Placeholder */}
      <div className="mb-4 sm:mb-6 aspect-video bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] rounded-xl mx-auto flex items-center justify-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-md"></div>
          </div>
          <p className="text-white/60 text-xs">Feature Preview</p>
        </div>
      </div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-[#FFCC00] transition-colors duration-300">{title}</h3>
      <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">{description}</p>
      <ul className="space-y-2 sm:space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 sm:space-x-3 text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">
            <div className="w-1.5 h-1.5 bg-[#FFCC00] rounded-full group-hover:bg-[#14B8A6] transition-colors duration-300"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Step Card Component - Mobile Optimized
function StepCard({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center space-y-4 sm:space-y-6">
      {/* Step Image */}
      <div className="relative">
        <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mx-auto max-w-32 sm:max-w-48">
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center">
              <span className="text-[#003366] font-bold text-lg sm:text-xl">{step}</span>
            </div>
            <p className="text-white/60 text-xs sm:text-sm">Step {step}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Trust Metric Component - Mobile Optimized
function TrustMetric({ number, label }: { number: string; label: string }) {
  return (
    <div className="group text-center hover:scale-110 transition-transform duration-300">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFCC00] mb-1 sm:mb-2 group-hover:text-[#14B8A6] transition-colors duration-300">{number}</div>
      <div className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">{label}</div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6">
      <p className="text-white font-medium mb-2 text-sm sm:text-base">{q}</p>
      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{a}</p>
    </div>
  );
}