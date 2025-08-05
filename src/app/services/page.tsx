import { Metadata } from 'next'
import Link from 'next/link'
import { Building, Home, Wrench, Users, ArrowRight, Square } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Glazek LLC',
  description: 'Professional glazing services including curtain walls, storefronts, commercial windows, canopies, mirrors, and complete glass solutions.',
}

export default function Services() {
  const services = [
    {
      icon: Building,
      title: 'Commercial Glazing Systems',
      description: 'Professional installation of curtain walls, storefronts, and commercial windows.',
      features: [
        'Curtain walls',
        'Storefront systems', 
        'Commercial windows',
        'Door entrances',
        'Hollow metal frames'
      ]
    },
    {
      icon: Home,
      title: 'Residential Glass Solutions',
      description: 'Complete residential glazing services from windows to shower doors.',
      features: [
        'Residential windows',
        'Shower doors',
        'Mirrors',
        'Door hardware',
        'Glass panels'
      ]
    },
    {
      icon: Square,
      title: 'Specialty Glazing Services',
      description: 'Advanced glazing techniques and specialty glass installations.',
      features: [
        'Glazing & caulking',
        'Skylights',
        'Canopies',
        'Sunshades',
        'Brake metal'
      ]
    },
    {
      icon: Wrench,
      title: 'Glass Maintenance & Repair',  
      description: 'Professional maintenance and repair services for all glazing systems.',
      features: [
        'Glass replacement',
        'Seal repairs',
        'Hardware maintenance',
        'Emergency services',
        'Preventive maintenance'
      ]
    }
  ]

  return (
    <div className="bg-white">
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Glazing Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Professional glazing solutions with proven expertise and complete dedication to quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
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

      <section className="py-32 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Glazing Process
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Precision glazing installation with specialized techniques and quality assurance.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">Site Assessment</h3>
              <p className="mt-2 text-blue-100">
                Evaluate glazing requirements and measurements.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">Glass Fabrication</h3>
              <p className="mt-2 text-blue-100">
                Custom glass cutting and frame preparation.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">Installation</h3>
              <p className="mt-2 text-blue-100">
                Precision glazing installation and sealing.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">Quality Check</h3>
              <p className="mt-2 text-blue-100">
                Final inspection and warranty coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Contact us to discuss your construction needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                🚀 Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-lg font-semibold rounded-md text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                📞 Call (555) 123-4567
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}