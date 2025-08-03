import { Metadata } from 'next'
import { Target, Eye, Award, Users } from 'lucide-react'

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
              We are dedicated to delivering superior construction solutions through collaborative, technology-driven processes with the highest standards of safety, quality, and transparency.
            </p>
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
                Every project we undertake is an opportunity to demonstrate our commitment to excellence and to strengthen the trust our clients place in us.
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
              With years of experience and a proven track record, we bring expertise, reliability, and innovation to every construction project.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}