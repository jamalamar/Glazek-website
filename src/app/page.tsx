import Link from 'next/link'
import Image from 'next/image'
import { Shield, Users, Award, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg"
            alt="Modern glass building facade"
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/80"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur rounded-full text-white border border-orange-400/30">
              <MapPin className="h-4 w-4 mr-2 text-orange-300" />
              <span className="text-sm font-medium">Texas Based Glazing Specialists</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-8">
              Professional Glazing &amp; Glass Solutions
            </h1>
            <p className="text-xl leading-8 text-blue-100 max-w-2xl mx-auto mb-12">
              Specialized in curtain walls, storefronts, commercial windows, canopies, and complete glazing systems for commercial and residential projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                🪟 Get Free Consultation
              </Link>
              <Link
                href="tel:+13465385428"
                className="text-lg font-semibold text-white hover:text-orange-300 flex items-center justify-center px-8 py-4 border-2 border-orange-400/40 rounded-md hover:border-orange-400/80 hover:bg-orange-500/10 transition-all duration-300"
              >
                📞 Call (346) 538-5428
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
              Specialized glazing expertise with cutting-edge technology and precision installation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-100 to-orange-200 mb-6 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 shadow-lg">
                <Shield className="h-8 w-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Glazing Safety Experts</h3>
              <p className="text-gray-600">
                Specialized fall protection and high-rise glazing safety protocols.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-blue-200 mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg">
                <Award className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision Installation</h3>
              <p className="text-gray-600">
                Advanced glazing equipment and structural glazing expertise.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-100 to-green-200 mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg">
                <Users className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Façade Specialists</h3>
              <p className="text-gray-600">
                Exclusive focus on glazing and curtain wall systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTQwIDQwSDBoMjB2LTIwaDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 font-medium text-sm mb-4 border border-orange-400/30">
              🏢 Glazing Excellence
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Glazing Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Precision engineering and expert installation for architectural glass systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur mb-6 group-hover:from-orange-500/30 group-hover:to-orange-600/30 border border-orange-400/30 shadow-lg">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📐</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Engineering Analysis</h3>
              <p className="text-gray-300">Structural calculations and glazing design.</p>
            </div>

            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur mb-6 group-hover:from-blue-500/30 group-hover:to-blue-600/30 border border-blue-400/30 shadow-lg">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Fabrication & Prep</h3>
              <p className="text-gray-300">Custom glazing unit preparation and quality control.</p>
            </div>

            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur mb-6 group-hover:from-yellow-500/30 group-hover:to-yellow-600/30 border border-yellow-400/30 shadow-lg">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Expert Installation</h3>
              <p className="text-gray-300">Precision glazing and weatherproofing.</p>
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
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                    alt="Tom Richardson"
                    fill
                    className="rounded-full object-cover"
                  />
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
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                    alt="Lisa Chen"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Chen</div>
                  <div className="text-sm text-gray-500">Homeowner</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-orange-50 rounded-xl shadow-xl p-8 text-center border-2 border-orange-100 hover:border-orange-200 transition-all duration-300">
            <div className="mb-4">
              <span className="text-4xl">🏗️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Contact us for a consultation and see how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              🚀 Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}