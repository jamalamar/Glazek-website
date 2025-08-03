import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - Glazek LLC',
  description: 'Explore our portfolio of completed construction projects showcasing quality craftsmanship and innovative solutions.',
}

export default function Projects() {
  const projects = [
    {
      title: 'Downtown Office Complex',
      category: 'Commercial',
      location: 'City Center',
      year: '2023',
      description: 'A modern 12-story office building featuring sustainable design elements and state-of-the-art technology infrastructure.',
      features: [
        'LEED Gold Certification',
        '200,000 sq ft',
        'Smart building systems',
        'Underground parking'
      ]
    },
    {
      title: 'Luxury Residential Development',
      category: 'Residential',
      location: 'Suburban Heights',
      year: '2023',
      description: 'Exclusive gated community featuring 50 custom homes with premium finishes and landscaping.',
      features: [
        '50 custom homes',
        'Gated community',
        'Premium finishes',
        'Community amenities'
      ]
    },
    {
      title: 'Medical Center Renovation',
      category: 'Healthcare',
      location: 'Medical District',
      year: '2022',
      description: 'Complete renovation of a 5-story medical facility while maintaining full operational capacity.',
      features: [
        'Phased construction',
        'Zero downtime',
        'Advanced HVAC systems',
        'ADA compliance'
      ]
    },
    {
      title: 'Manufacturing Facility',
      category: 'Industrial',
      location: 'Industrial Park',
      year: '2022',
      description: 'New 100,000 sq ft manufacturing facility with specialized equipment foundations and utility systems.',
      features: [
        '100,000 sq ft',
        'Specialized foundations',
        'Heavy utility systems',
        'Safety protocols'
      ]
    },
    {
      title: 'Historic Building Restoration',
      category: 'Restoration',
      location: 'Historic District',
      year: '2021',
      description: 'Careful restoration of a 1920s historic building, preserving original character while modernizing systems.',
      features: [
        'Historic preservation',
        'Original character retained',
        'Modern systems',
        'Heritage compliance'
      ]
    },
    {
      title: 'Retail Shopping Center',
      category: 'Retail',
      location: 'Commercial District',
      year: '2021',
      description: 'New construction of a modern shopping center with multiple anchor tenants and specialty shops.',
      features: [
        '150,000 sq ft',
        'Multiple anchor tenants',
        'Modern design',
        'Ample parking'
      ]
    }
  ]

  const categories = ['All', 'Commercial', 'Residential', 'Healthcare', 'Industrial', 'Restoration', 'Retail']

  return (
    <div className="bg-white">
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-50"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-lg">
                  <div className="flex items-center justify-center h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg">
                    <span className="text-gray-500 text-sm">Project Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-1 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Project Statistics
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="mt-2 text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="mt-2 text-blue-100">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">98%</div>
              <div className="mt-2 text-blue-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="mt-2 text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Start Your Next Project?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Let&#39;s discuss how we can bring your construction vision to life with the same quality and dedication shown in our portfolio.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}