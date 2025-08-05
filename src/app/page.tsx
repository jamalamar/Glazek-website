import Link from 'next/link'
import { Shield, Users, Award, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Texas Licensed & Insured</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-8">
              Building Tomorrow&#39;s Structures Today
            </h1>
            <p className="text-xl leading-8 text-blue-100 max-w-2xl mx-auto mb-12">
              Innovative construction with proven expertise and modern approaches.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-all"
              >
                Get Free Consultation
              </Link>
              <Link
                href="tel:+15551234567"
                className="text-lg font-semibold text-white hover:text-blue-100 flex items-center justify-center px-8 py-4 border-2 border-white/20 rounded-md hover:border-white/40 transition-all"
              >
                📞 Call (555) 123-4567
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Glazek LLC
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern construction with safety, technology, and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Latest safety protocols with zero incidents.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Technology</h3>
              <p className="text-gray-600">
                Cutting-edge tools and innovative methods.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Focus</h3>
              <p className="text-gray-600">
                Your project gets our complete attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Modern technology and transparent communication for superior results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Real-Time Tracking</h3>
              <p className="text-gray-300">Live updates and instant communication.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Precision Planning</h3>
              <p className="text-gray-300">3D modeling and detailed project management.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Quick Response</h3>
              <p className="text-gray-300">Fast decisions and responsive service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-600 mb-6">
                &ldquo;They treated our project with exceptional attention to detail and delivered outstanding results.&rdquo;
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
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-600 mb-6">
                &ldquo;Their modern approach and constant communication made our renovation seamless and stress-free.&rdquo;
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
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Contact us for a consultation and see how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-4 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}