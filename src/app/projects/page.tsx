import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Projects - Glazek LLC',
  description: 'Explore our portfolio of completed glazing projects showcasing quality craftsmanship and innovative glass solutions.',
}

export default function Projects() {
  const projects = [
    {
      title: 'Commercial Curtain Wall Installation',
      category: 'Commercial Glazing',
      location: 'Texas',
      year: '2024',
      description: 'High-rise curtain wall system with energy-efficient glazing, completed ahead of schedule.',
      features: [
        'Structural glazing system',
        'Energy-efficient glass',
        'Completed 2 weeks early',
        'Zero safety incidents'
      ],
      imageUrl: '',
      placeholderIcon: '🏢',
      placeholderText: 'Curtain wall project photos coming soon'
    },
    {
      title: 'Residential Window & Storefront Project',
      category: 'Residential Glazing',
      location: 'Texas',
      year: '2024',
      description: 'Custom residential windows, mirrors, and shower doors with premium glazing.',
      features: [
        'Custom window installation',
        'Premium shower doors',
        'Mirror installations',
        'Exceeded client expectations'
      ],
      imageUrl: '',
      placeholderIcon: '🪟',
      placeholderText: 'Residential glazing photos coming soon'
    }
  ]

  const categories = ['All', 'Commercial Glazing', 'Residential Glazing']

  return (
    <div className="bg-white">
      <section className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              🪟 Our Glazing Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Quality glazing installations. Each project represents our specialized expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Project</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Commercial Curtain Wall Project</h3>
                <p className="text-blue-100 mb-6">
                  High-rise curtain wall installation delivered 2 weeks ahead of schedule with zero safety incidents and complete client satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>2 weeks early</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Zero incidents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Structural glazing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>100% satisfaction</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-white/10 backdrop-blur rounded-lg overflow-hidden">
                  <ImagePlaceholder
                    src=""
                    alt="Modern Office Building - Featured Project"
                    className="w-full h-full"
                    placeholderIcon="🏢"
                    placeholderText="Photos coming soon"
                    gradientFrom="white/10"
                    gradientTo="white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Portfolio</h2>
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

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <ImagePlaceholder
                  src={project.imageUrl}
                  alt={`${project.title} - ${project.category} project in ${project.location}`}
                  className="h-48 rounded-t-lg"
                  placeholderIcon={project.placeholderIcon}
                  placeholderText={project.placeholderText}
                />
                
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

      <section className="py-32 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Project Performance
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Authentic metrics that demonstrate our commitment to excellence and reliability.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="mt-2 text-blue-100">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="mt-2 text-blue-100">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">Zero</div>
              <div className="mt-2 text-blue-100">Safety Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">Texas</div>
              <div className="mt-2 text-blue-100">Based, Nationwide Service</div>
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
              Let's bring your construction vision to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                🚀 Start Your Project
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