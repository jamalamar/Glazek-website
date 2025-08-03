import Link from 'next/link'
import { ArrowRight, Shield, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Superior Construction Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Delivering excellence through collaborative, technology-driven processes with the highest standards of safety, quality, and transparency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get a Quote
              </Link>
              <Link
                href="/projects"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 flex items-center"
              >
                View Our Work <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
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
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
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
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}