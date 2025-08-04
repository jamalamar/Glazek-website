import { Metadata } from 'next'
import { Target, Eye, Award, Users, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Glazek LLC',
  description: 'Learn about Glazek LLC&#39;s mission, values, and commitment to delivering superior construction solutions.',
}

export default function About() {
  return (
    <div className="bg-white">
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Glazek LLC
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We're the fresh alternative to traditional construction - combining proven expertise with innovative approaches to deliver exceptional results. Based in Texas, serving nationwide with modern solutions for today's construction challenges.
            </p>
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-blue-800 mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Our Service Area</span>
              </div>
              <p className="text-blue-700 text-center">
                <strong>Headquarters:</strong> Texas • <strong>Service Area:</strong> Nationwide
                <br />
                <span className="text-sm">Local expertise, national reach - we bring Texas work ethic everywhere we build</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                To deliver superior construction solutions through a collaborative, technology-driven process. We are committed to completing projects with the highest standards of safety, quality, and transparency, ensuring client satisfaction and building lasting relationships.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                As a forward-thinking construction company, we're not bound by outdated practices or bureaucratic processes. Every project benefits from our complete focus, cutting-edge technology, and fresh perspective on construction excellence.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Being new in the industry means we're hungry to prove ourselves, responsive to your needs, and committed to exceeding expectations on every single project.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
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

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These principles guide every decision we make and every project we complete.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                We maintain an unwavering commitment to safety standards and protocols. Every team member goes home safely every day - this is our top priority on every project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We deliver superior craftsmanship and attention to detail in every aspect of our work. Quality is not just what we do - it&#39;s who we are.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Communication</h3>
              <p className="text-gray-600">
                We believe in open, honest communication throughout every project. Our clients are informed partners in the construction process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Integration</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technology and innovative processes to improve efficiency, accuracy, and project outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Satisfaction</h3>
              <p className="text-gray-600">
                Every project is completed with the goal of exceeding client expectations and building relationships that last beyond project completion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Approach</h3>
              <p className="text-gray-600">
                We work closely with clients, architects, and subcontractors to ensure seamless project delivery and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Glazek LLC?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We bring fresh energy, modern expertise, and complete dedication to every project. Our approach combines innovative methods with proven construction principles to deliver exceptional results.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">Zero</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Safety Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">$2M</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Insurance Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Communication</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Fresh Alternative
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Why working with a new construction company gives you distinct advantages
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Project Gets Complete Focus</h3>
              <p className="text-gray-600">
                Unlike established companies juggling dozens of projects, we give every client our undivided attention. Your project isn't just another number - it's our opportunity to prove excellence and build a lasting relationship.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Methods, Not Legacy Limitations</h3>
              <p className="text-gray-600">
                We're not stuck in outdated practices or bureaucratic processes. Our fresh approach embraces the latest technology, materials, and construction methods to deliver superior results efficiently.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hungry to Exceed Expectations</h3>
              <p className="text-gray-600">
                Every project is a chance to demonstrate our capabilities and earn your trust. This drive for excellence means we go above and beyond on every detail, timeline, and client interaction.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Agile and Responsive</h3>
              <p className="text-gray-600">
                Without layers of bureaucracy, we make decisions quickly and adapt to changes efficiently. When you need answers or adjustments, you get them fast - not after committee meetings and approval chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Certifications & Credentials
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fully licensed, bonded, and certified to ensure your project meets all safety and quality standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="font-semibold text-gray-900">Licensed Contractor</h3>
              <p className="text-sm text-gray-600">State License #123456</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900">Fully Insured</h3>
              <p className="text-sm text-gray-600">$2M General Liability</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900">OSHA Certified</h3>
              <p className="text-sm text-gray-600">Safety Compliance</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900">BBB A+ Rating</h3>
              <p className="text-sm text-gray-600">Accredited Business</p>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Associations
              </h3>
              <div className="flex flex-wrap justify-center gap-8 text-gray-600">
                <span>• Associated General Contractors (AGC)</span>
                <span>• National Association of Home Builders (NAHB)</span>
                <span>• Green Building Council</span>
                <span>• Construction Financial Management Association</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}