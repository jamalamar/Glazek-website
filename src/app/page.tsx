import Link from 'next/link'
import { ArrowRight, Shield, Users, Award, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur rounded-full text-sm font-medium text-white">
                🏗️ Est. 2024 - Fresh Perspective
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur rounded-full text-sm font-medium text-white">
                🛡️ TX Licensed & $2M Insured
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur rounded-full text-sm font-medium text-white">
                🏆 BBB A+ Rating
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Building Tomorrow&#39;s Structures Today
            </h1>
            <p className="mt-8 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              We're the innovative construction partner that combines proven expertise with modern approaches. Every project gets our complete focus, advanced technology, and unwavering dedication to excellence.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Texas-Based • Nationwide Service • Local Expertise</span>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-md bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                Get Free Consultation - No Obligation
              </Link>
              <Link
                href="tel:+15551234567"
                className="w-full sm:w-auto text-lg font-semibold leading-6 text-white hover:text-blue-100 flex items-center justify-center px-8 py-4 border-2 border-white/20 rounded-md hover:border-white/40 transition-all"
              >
                📞 Call (555) 123-4567
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-blue-100">Project Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Zero</div>
                <div className="text-sm text-blue-100">Safety Incidents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-100">Project Communication</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">$2M</div>
                <div className="text-sm text-blue-100">Insured & Licensed</div>
              </div>
            </div>
            
            {/* Trust Building Badges */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/80">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Shield className="h-4 w-4" />
                <span className="text-sm">TX Licensed Contractor</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span className="text-sm">BBB A+ Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Users className="h-4 w-4" />
                <span className="text-sm">Est. 2024 - Fresh Perspective</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Fresh Alternative Advantage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Why working with a new, innovative construction company gives you distinct advantages over traditional contractors.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <span className="text-green-800 font-medium">New Company = Complete Focus on Your Success</span>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center group hover:bg-blue-50 p-6 rounded-lg transition-colors">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Zero Compromises on Safety</h3>
              <p className="mt-2 text-gray-600">
                Fresh approach means latest safety protocols and zero incidents across all projects.
              </p>
            </div>

            <div className="text-center group hover:bg-blue-50 p-6 rounded-lg transition-colors">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Modern Technology Integration</h3>
              <p className="mt-2 text-gray-600">
                Cutting-edge tools and methods traditional contractors haven't adopted yet.
              </p>
            </div>

            <div className="text-center group hover:bg-blue-50 p-6 rounded-lg transition-colors">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Complete Project Focus</h3>
              <p className="mt-2 text-gray-600">
                Your project gets our undivided attention - not lost in a sea of dozens of jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Technology Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium mb-4">
              <span>🚀 Innovation-First Approach</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Modern Technology Meets Construction Excellence
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              While traditional contractors stick to outdated methods, we leverage cutting-edge technology to deliver superior results, faster timelines, and transparent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur group-hover:bg-white/20 transition-colors mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Project Tracking</h3>
              <p className="text-gray-300 text-sm">Live updates, photo progress, and instant communication through our project dashboard.</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur group-hover:bg-white/20 transition-colors mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Construction Methods</h3>
              <p className="text-gray-300 text-sm">Latest building techniques, materials, and processes for superior quality and efficiency.</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur group-hover:bg-white/20 transition-colors mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Precision Planning</h3>
              <p className="text-gray-300 text-sm">3D modeling, precise scheduling, and detailed project management for zero surprises.</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur group-hover:bg-white/20 transition-colors mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Agile Response</h3>
              <p className="text-gray-300 text-sm">Quick decisions, rapid adjustments, and responsive service without bureaucratic delays.</p>
            </div>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">The Technology Advantage</h3>
              <p className="text-gray-300 mb-6">
                Why settle for contractors using decade-old methods when you can work with a team that embraces innovation? 
                Our fresh approach means you get the benefits of modern construction technology from day one.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Digital project management</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Smart building integration</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Sustainable construction methods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every project is an opportunity to exceed expectations and build lasting relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &ldquo;What impressed me most was their fresh approach and attention to detail. They treated our project like it was the most important one they've ever worked on - and delivered exceptional results.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">TR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Tom Richardson</div>
                  <div className="text-sm text-gray-500">Property Developer</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &ldquo;Finally, a construction company that actually listens and delivers. Their modern approach and constant communication made our renovation seamless and stress-free.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">LC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Chen</div>
                  <div className="text-sm text-gray-500">Homeowner</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &ldquo;They brought innovative solutions we hadn't seen from other contractors. Their technology-driven approach and responsiveness made all the difference in our project timeline.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">MW</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mark Williams</div>
                  <div className="text-sm text-gray-500">Business Owner</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Building Lasting Relationships
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At Glazek LLC, we believe that exceptional construction goes beyond just building structures. We build lasting relationships with our clients through transparent communication, reliable service, and unwavering commitment to excellence.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start Your Project?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a consultation and see how we can bring your construction vision to life.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}