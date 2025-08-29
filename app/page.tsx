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
              Financial Inclusion for African SMEs
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight px-2">
              Transform Informal
              <br />
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] bg-clip-text text-transparent">
                Bookkeeping into Bank-Ready Records
              </span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
              Vono24 transforms scattered receipts and mental inventory into verified financial records, unlocking access to capital that small businesses desperately need to grow across Africa.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="hidden sm:block space-y-3 sm:space-y-6">
              <h2 className="text-lg sm:text-2xl font-semibold text-white mb-2 px-4">
                Join the waitlist for early access
              </h2>
              <p className="text-white/70 text-sm sm:text-lg max-w-2xl mx-auto px-4">
                Be among the first small business owners to unlock financial growth with Vono24.
              </p>
            </div>
            <div className="hidden sm:block">
              <WaitlistForm />
            </div>
            
            {/* Key Features - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/60 text-xs sm:text-sm px-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>Barcode scanning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FFCC00] rounded-full"></div>
                <span>Gamified training</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>Bank-ready records</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FFCC00] rounded-full"></div>
                <span>Credit access</span>
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
                <h3 className="text-xl sm:text-2xl font-bold text-white">Smart Inventory Management</h3>
                <p className="text-white/60 text-sm sm:text-base">Scan products, track sales, build credit history</p>
              </div>
              
              {/* Floating UI Elements - Responsive positioning */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-white/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#14B8A6] rounded-full"></div>
                  <span className="text-white/80 text-xs sm:text-sm">Daily Sales</span>
                </div>
              </div>
              
              <div className="hidden sm:block absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-white/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FFCC00] rounded-full"></div>
                  <span className="text-white/80 text-xs sm:text-sm">Inventory Alert</span>
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
              The Challenge for
              <br />
              <span className="text-white/60">Small African Businesses</span>
            </h2>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Informal sector businesses drive 70% of Africa's GDP, yet struggle to access the capital they need to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ProblemCard 
              title="No Formal Records"
              description="Small businesses keep inventory in their heads or on paper scraps, making it impossible for banks to assess creditworthiness."
              icon="📝"
              delay="0"
            />
            <ProblemCard 
              title="Limited Digital Skills"
              description="Traditional accounting software requires skills many small business owners don't have, creating more friction than value."
              icon="📱"
              delay="100"
            />
            <ProblemCard 
              title="No Access to Capital"
              description="Without verifiable financial records, banks see these businesses as too risky to lend to, blocking growth opportunities."
              icon="🏦"
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
              How Vono24 Works
              <br />
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] bg-clip-text text-transparent">
                for Your Business
              </span>
            </h2>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
              We don't ask you to change your behavior — we embed our technology into your existing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <FeatureHighlight 
                title="Register Your Products"
                description="Take photos of your products, speak their names, set prices. Vono24 generates unique barcodes automatically."
                accent="[#14B8A6]"
              />
              <FeatureHighlight 
                title="Scan & Sell"
                description="Scan product barcodes during sales. Every transaction automatically updates inventory and financial records."
                accent="[#FFCC00]"
              />
              <FeatureHighlight 
                title="Learn While You Work"
                description="Gamified training teaches proper bookkeeping and inventory management skills as you use the platform."
                accent="[#14B8A6]"
              />
              <FeatureHighlight 
                title="Access Capital"
                description="Build bank-ready financial profiles that unlock loans and credit facilities for business expansion."
                accent="[#FFCC00]"
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
                    
                    {/* Sales Card */}
                    <div className="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] rounded-2xl p-4 sm:p-6 text-white">
                      <p className="text-xs sm:text-sm opacity-90">Today's Sales</p>
                      <p className="text-xl sm:text-2xl font-bold">₦15,000</p>
                      <p className="text-xs opacity-75 mt-1 sm:mt-2">Profit: ₦4,500</p>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-white/10">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#14B8A6] rounded-lg mx-auto mb-1 sm:mb-2"></div>
                        <p className="text-white/80 text-xs">Scan Product</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-white/10">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFCC00] rounded-lg mx-auto mb-1 sm:mb-2"></div>
                        <p className="text-white/80 text-xs">View Inventory</p>
                      </div>
                    </div>
                    
                    {/* Recent Activity */}
                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-white/60 text-xs sm:text-sm">Recent Sales</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-1 sm:py-2">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#14B8A6] rounded-full"></div>
                            <div>
                              <p className="text-white text-xs sm:text-sm">Rice (2kg)</p>
                              <p className="text-white/60 text-xs">2 minutes ago</p>
                            </div>
                          </div>
                          <p className="text-[#14B8A6] text-xs sm:text-sm font-medium">₦2,500</p>
                        </div>
                        <div className="flex items-center justify-between py-1 sm:py-2">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FFCC00] rounded-full"></div>
                            <div>
                              <p className="text-white text-xs sm:text-sm">Cooking Oil</p>
                              <p className="text-white/60 text-xs">5 minutes ago</p>
                            </div>
                          </div>
                          <p className="text-white/60 text-xs sm:text-sm">₦1,800</p>
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
              Perfect For
              <br />
              <span className="text-[#FFCC00]">Small African Businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            <AdvancedFeatureCard 
              title="Roadside Stores & Kiosks"
              description="Transform your mom's roadside store from mental inventory to bank-ready financial records with simple barcode scanning."
              features={["Barcode scanning", "Voice input", "Daily sales tracking"]}
            />
            <AdvancedFeatureCard 
              title="Market Traders & Vendors"
              description="Convert scattered receipts into verifiable business data that unlocks access to loans and credit facilities."
              features={["Inventory management", "Profit tracking", "Credit building"]}
            />
            <AdvancedFeatureCard 
              title="Small Family Businesses"
              description="Build financial credibility through consistent record-keeping without changing your existing business habits."
              features={["Gamified learning", "Financial statements", "Growth opportunities"]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-2">
              Your Journey to Financial Growth
            </h2>
            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
              From informal record-keeping to bank-ready financial profiles in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            <StepCard 
              step="01"
              title="Setup Your Products"
              description="Register your inventory with photos and voice input. Generate printable barcodes for each product."
            />
            <StepCard 
              step="02"
              title="Scan & Track Sales"
              description="Scan product barcodes during sales. Automatically track inventory, revenue, and profits daily."
            />
            <StepCard 
              step="03"
              title="Access Capital"
              description="Build verifiable financial records that unlock loans and credit for business expansion."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-20 py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 px-2">
            The Impact on African Communities
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <TrustMetric number="70%" label="Africa's GDP" />
            <TrustMetric number="₦0" label="Setup Cost" />
            <TrustMetric number="24/7" label="Availability" />
            <TrustMetric number="100%" label="Voice Support" />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-12">
            <p className="text-lg sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              "When small businesses like my mother's can access funding and scale, the ripple effects strengthen entire communities — creating jobs for youth, enabling better education for families, and building more prosperous, stable societies across Africa."
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
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-[#14B8A6] to-[#FFCC00] bg-clip-text text-transparent">
              Your Business Records?
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Join the waitlist and be among the first small business owners to unlock financial growth with Vono24.
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
            <FAQItem q="Do I need to learn accounting software?" a="No. Vono24 works invisibly around your existing habits. Just scan products and sell — we handle the bookkeeping automatically." />
            <FAQItem q="How does the barcode system work?" a="Take photos of your products, speak their names, set prices. We generate unique barcodes you print and stick on products." />
            <FAQItem q="What if I don't have internet?" a="Vono24 works offline and syncs when you have connection. Perfect for areas with unreliable internet." />
            <FAQItem q="How long until I can get a loan?" a="Most businesses build bank-ready financial profiles within 3-6 months of consistent use, depending on transaction volume." />
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
                Transforming informal bookkeeping into verified financial records for African small businesses.
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