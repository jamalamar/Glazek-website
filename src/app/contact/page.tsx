import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Glazek LLC',
  description: 'Get in touch with Glazek LLC for your construction needs. Contact us for quotes, consultations, and project discussions.',
}

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Ready to start your construction project? Get in touch with our team for a consultation and personalized quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@glazekllc.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Office Location</h3>
                    <p className="text-gray-600">
                      123 Construction Way<br />
                      Suite 100<br />
                      Your City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Emergency Services
                </h3>
                <p className="text-gray-600 mb-4">
                  For construction emergencies and urgent repairs, we offer 24/7 emergency services.
                </p>
                <p className="text-blue-600 font-medium">
                  Emergency Hotline: (555) 999-HELP
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-800 font-medium mb-2">
                    ⚡ 4-Hour Response Guarantee
                  </div>
                  <p className="text-blue-700 text-sm">
                    Unlike traditional contractors who take days to respond, we reply within 4 hours during business hours. Fresh approach, fast service.
                  </p>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Free Consultation - No Obligation
                </h2>
                <p className="text-gray-600 mb-8">
                  Ready to experience the fresh alternative to traditional construction? Let&#39;s discuss your project and show you how our modern approach delivers better results.
                </p>
                
                <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No pressure sales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Transparent pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Modern technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Complete project focus</span>
                  </div>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Glazek LLC?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              When you contact us, you&#39;re not just getting a contractor - you&#39;re getting a trusted partner committed to your success.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Responsive Communication</h3>
              <p className="mt-2 text-gray-600">
                We respond to all inquiries within 24 hours and keep you informed throughout your project.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Local Expertise</h3>
              <p className="mt-2 text-gray-600">
                Deep knowledge of local building codes, permits, and regulations for smooth project execution.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">On-Time Delivery</h3>
              <p className="mt-2 text-gray-600">
                Committed to meeting deadlines and delivering projects on schedule and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick answers to common questions about our construction services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and complexity. Most residential projects take 30-90 days, while commercial projects typically range from 90-180 days. We provide detailed timelines during our initial consultation and keep you updated throughout the process.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you handle permits and inspections?
              </h3>
              <p className="text-gray-600">
                Yes, we handle all necessary permits, inspections, and regulatory compliance. Our team has extensive experience with local building codes and maintains relationships with municipal offices to streamline the approval process.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What&#39;s included in a free estimate?
              </h3>
              <p className="text-gray-600">
                Our free estimates include detailed project scope, materials breakdown, labor costs, timeline, and any necessary permits or inspections. We also provide alternative solutions and recommendations to optimize your budget and outcomes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Are you licensed and insured?
              </h3>
              <p className="text-gray-600">
                Absolutely. Glazek LLC is fully licensed, bonded, and insured. We carry comprehensive general liability insurance and workers&#39; compensation coverage. All our licenses and certifications are current and available for review.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What happens if there are unexpected issues during construction?
              </h3>
              <p className="text-gray-600">
                We conduct thorough pre-construction assessments to minimize surprises. If unexpected issues arise, we immediately communicate with you, provide solution options with cost implications, and only proceed with your approval. Transparency is key to our process.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you offer warranties on your work?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive warranties on all our work. Structural work comes with a 10-year warranty, while other components typically have 1-3 year warranties depending on the scope. We also help coordinate manufacturer warranties for materials and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}