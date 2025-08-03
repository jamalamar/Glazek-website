import Link from 'next/link'
import { ArrowRight, Shield, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium text-white">
                🏆 Trusted by 200+ Property Developers
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Turn Your Vision Into Reality
            </h1>
            <p className="mt-8 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              From concept to completion, we deliver construction projects on time, on budget, and beyond expectations. Most projects completed in 90 days or less.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-md bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                Get Your Free Project Estimate
              </Link>
              <Link
                href="tel:+15551234567"
                className="w-full sm:w-auto text-lg font-semibold leading-6 text-white hover:text-blue-100 flex items-center justify-center px-8 py-4 border-2 border-white/20 rounded-md hover:border-white/40 transition-all"
              >
                📞 Call (555) 123-4567
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-blue-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Glazek LLC?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine decades of experience with innovative approaches to deliver exceptional results.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Safety First</h3>
              <p className="mt-2 text-gray-600">
                Uncompromising commitment to safety standards and protocols on every project.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Quality Excellence</h3>
              <p className="mt-2 text-gray-600">
                Delivering superior craftsmanship and attention to detail in every project.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Collaborative Approach</h3>
              <p className="mt-2 text-gray-600">
                Working closely with clients through transparent, technology-driven processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Don&#39;t just take our word for it - hear from property developers and homeowners who trust Glazek LLC
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
                &ldquo;Glazek LLC exceeded our expectations on our downtown office complex. They delivered on time, stayed within budget, and the quality was outstanding.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                  <div className="text-sm text-gray-500">CEO, Metro Properties</div>
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
                &ldquo;The team&#39;s attention to detail and communication throughout our home renovation was exceptional. They made the process stress-free.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
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
                &ldquo;Professional, reliable, and innovative. Glazek LLC helped us modernize our manufacturing facility with minimal downtime.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">DT</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">David Thompson</div>
                  <div className="text-sm text-gray-500">Operations Manager, TechCorp</div>
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