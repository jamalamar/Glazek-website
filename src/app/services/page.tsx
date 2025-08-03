import { Metadata } from 'next'
import Link from 'next/link'
import { Building, Home, Wrench, Hammer, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Glazek LLC',
  description: 'Comprehensive construction services including commercial buildings, residential projects, renovations, and project management.',
}

export default function Services() {
  const services = [
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from ground up construction to tenant improvements.',
      features: [
        'Office buildings and complexes',
        'Retail and shopping centers',
        'Industrial facilities',
        'Warehouses and distribution centers',
        'Mixed-use developments'
      ]
    },
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes and residential developments built to the highest standards of quality and craftsmanship.',
      features: [
        'Custom home construction',
        'Multi-family developments',
        'Townhomes and condominiums',
        'Luxury residential projects',
        'Sustainable building practices'
      ]
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with professional renovation and remodeling services.',
      features: [
        'Interior renovations',
        'Building modernization',
        'Historic preservation',
        'Accessibility improvements',
        'Energy efficiency upgrades'
      ]
    },
    {
      icon: Hammer,
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring on-time, on-budget project delivery.',
      features: [
        'Design-build services',
        'Construction management',
        'Value engineering',
        'Schedule coordination',
        'Quality control and assurance'
      ]
    }
  ]

  return (
    <div className="bg-white">
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs with the highest standards of quality and professionalism.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Construction Process
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              We follow a proven methodology that ensures project success from initial consultation to final delivery.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">Consultation</h3>
              <p className="mt-2 text-blue-100">
                Initial meeting to understand your vision, requirements, and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">Planning</h3>
              <p className="mt-2 text-blue-100">
                Detailed project planning, design development, and permit acquisition.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">Construction</h3>
              <p className="mt-2 text-blue-100">
                Professional construction with regular updates and quality checkpoints.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">Delivery</h3>
              <p className="mt-2 text-blue-100">
                Final inspection, project handover, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Contact us today to discuss your construction needs and get a personalized quote.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}