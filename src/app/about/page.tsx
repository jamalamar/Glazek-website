import { Metadata } from 'next'
import { Target, Eye, Award, Users, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Glazek LLC',
  description: 'Learn about Glazek LLC&#39;s mission, values, and commitment to delivering superior construction solutions.',
}

export default function About() {
  return (
    <div className="bg-white">
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Glazek LLC
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Modern construction solutions with proven expertise and innovative approaches.
            </p>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <MapPin className="h-4 w-4 mr-2 text-blue-600" />
              <span className="text-blue-800 font-medium">Texas Based • Nationwide Service</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                To deliver superior construction solutions through technology-driven processes with the highest standards of safety, quality, and transparency.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Every project benefits from our complete focus, modern technology, and commitment to exceeding expectations.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Target className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Precision</h3>
                  <p className="text-sm text-gray-600">Attention to every detail</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Eye className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Transparency</h3>
                  <p className="text-sm text-gray-600">Open communication</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-sm text-gray-600">Superior quality work</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Collaboration</h3>
                  <p className="text-sm text-gray-600">Working together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Unwavering commitment to safety standards on every project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                Superior craftsmanship and attention to detail in every aspect.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Communication</h3>
              <p className="text-gray-600">
                Open, honest communication throughout every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Glazek LLC
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Modern expertise and complete dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Project Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">Zero</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Safety Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">$2M</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Insured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Communication</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Licensed & Certified
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="font-semibold text-gray-900">Licensed</h3>
              <p className="text-sm text-gray-600">Texas Contractor</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900">Insured</h3>
              <p className="text-sm text-gray-600">$2M Coverage</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900">OSHA Certified</h3>
              <p className="text-sm text-gray-600">Safety Standards</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900">BBB A+ Rated</h3>
              <p className="text-sm text-gray-600">Accredited</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}