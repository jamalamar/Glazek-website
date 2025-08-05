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
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Get in touch for a glazing consultation and personalized quote for your glass installation needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-10">
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
                    <p className="text-gray-600">glazek.contact@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Service Area</h3>
                    <p className="text-gray-600">
                      Texas-based with nationwide service
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
                <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                  <div className="flex items-center gap-2 text-orange-800 font-medium">
                    ⚡ 24-Hour Response Guarantee
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Free Glazing Consultation
                </h2>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 group">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">⏱️</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  How long does a typical glazing project take?
                </h3>
              </div>
              <p className="text-gray-600">
                Most residential glazing projects take 1-3 weeks, commercial curtain wall projects 4-12 weeks. We provide detailed timelines during consultation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 group">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">📝</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  Do you handle permits and inspections?
                </h3>
              </div>
              <p className="text-gray-600">
                Yes, we handle all permits, inspections, and regulatory compliance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-200 group">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">🛡️</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  Are you licensed and insured?
                </h3>
              </div>
              <p className="text-gray-600">
                Yes, fully licensed, bonded, and insured with comprehensive coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}