import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Projects - Glazek LLC',
  description: 'Explore our portfolio of completed construction projects showcasing quality craftsmanship and innovative solutions.',
}

export default function Projects() {
  const projects = [
    {
      title: 'Modern Office Building',
      category: 'Commercial',
      location: 'Texas',
      year: '2024',
      description: 'A cutting-edge office facility featuring sustainable design and advanced technology integration, completed ahead of schedule.',
      features: [
        'Energy-efficient systems',
        'Smart building technology',
        'Completed 2 weeks early',
        'Zero safety incidents'
      ],
      imageUrl: '', // Add URL here when professional photos are ready
      placeholderIcon: '🏢',
      placeholderText: 'Professional office building photos being finalized'
    },
    {
      title: 'Custom Residential Project',
      category: 'Residential',
      location: 'Texas',
      year: '2024',
      description: 'Luxury custom home showcasing innovative construction techniques and premium craftsmanship throughout.',
      features: [
        'Custom architectural design',
        'Premium materials',
        'Advanced home automation',
        'Exceeded client expectations'
      ],
      imageUrl: '', // Add URL here when professional photos are ready
      placeholderIcon: '🏡',
      placeholderText: 'Custom home photos coming soon'
    }
  ]

  const categories = ['All', 'Commercial', 'Residential']

  return (
    <div className="bg-white">
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Quality over quantity. Each project in our growing portfolio represents our complete focus, modern approach, and commitment to exceeding expectations.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <span className="text-blue-800 font-medium">Building Our Reputation One Exceptional Project at a Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Spotlight</h2>
            <p className="text-gray-600">Each project represents our complete dedication to excellence and innovation</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm mb-4">
                  <span>✨ Featured Success Story</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Modern Office Building - Delivered Early</h3>
                <p className="text-blue-100 mb-6">
                  Our inaugural commercial project showcased our fresh approach to construction management, 
                  delivering 2 weeks ahead of schedule with zero change orders and complete client satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Delivered 2 weeks early</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Zero safety incidents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Smart building integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>100% client satisfaction</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-white/10 backdrop-blur rounded-lg overflow-hidden">
                  <ImagePlaceholder
                    src="" // Add URL here when ready
                    alt="Modern Office Building - Featured Project"
                    className="w-full h-full"
                    placeholderIcon="🏢"
                    placeholderText="Professional photos being finalized"
                    gradientFrom="white/10"
                    gradientTo="white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Project Portfolio</h2>
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

      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Project Performance
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Authentic metrics that demonstrate our commitment to excellence and reliability.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Growing Portfolio
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From completed successes to exciting upcoming projects, see how we're making our mark in construction
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Completions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Modern office building - delivered 2 weeks ahead of schedule</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Custom luxury residence - exceeded all quality expectations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Zero safety incidents across all projects</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Current & Upcoming Projects</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Multi-unit residential development - in planning phase</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Commercial retail space - construction starting Q2 2024</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Healthcare facility renovation - proposal stage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Capabilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
                <div>Commercial Construction</div>
                <div>Residential Projects</div>
                <div>Renovation & Remodeling</div>
                <div>Project Management</div>
                <div>Design-Build Services</div>
                <div>Technology Integration</div>
                <div>Sustainable Building</div>
                <div>Safety Management</div>
              </div>
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
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-lg font-semibold rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                📞 Discuss Your Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}