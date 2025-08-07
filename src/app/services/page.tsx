import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
      ],
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600'
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
      ],
      color: 'from-emerald-600 to-teal-700',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600'
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
      ],
      color: 'from-amber-600 to-orange-700',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600'
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
      ],
      color: 'from-purple-600 to-violet-700',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
      iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600'
    }
  ]

  return (
    <div className="bg-white">
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Glass installation and glazing work"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900/60"></div>
        </div>
        
        {/* Glass-like decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400/15 rounded-full blur-md"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-blue-200 text-sm font-medium">Professional Glazing Excellence</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Glazing Services
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 max-w-2xl mx-auto">
              Professional glazing solutions with proven expertise and complete dedication to quality craftsmanship.
            </p>
            
            {/* Glass reflection effect */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Comprehensive Glazing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From commercial installations to residential repairs, we deliver excellence in every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative flex flex-col p-8 rounded-2xl ${service.bgColor} border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm`}
              >
                {/* Glass reflection effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-10 rounded-2xl transform rotate-45 translate-x-10 -translate-y-10`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start group/item">
                        <div className={`flex-shrink-0 w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2.5 mr-4 group-hover/item:scale-125 transition-transform duration-200`}></div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`mt-8 h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Background glass pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-blue-200 text-sm font-medium">Professional Process</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Our Glazing Process
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Precision glazing installation with specialized techniques and quality assurance at every step.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '1',
                title: 'Site Assessment',
                description: 'Comprehensive evaluation of glazing requirements and precise measurements.',
              },
              {
                number: '2', 
                title: 'Glass Fabrication',
                description: 'Custom glass cutting and frame preparation with precision tools.',
              },
              {
                number: '3',
                title: 'Installation',
                description: 'Expert glazing installation and professional sealing techniques.',
              },
              {
                number: '4',
                title: 'Quality Check',
                description: 'Thorough final inspection and comprehensive warranty coverage.',
              }
            ].map((step, index) => (
              <div key={index} className="group text-center">
                <div className="relative">
                  {/* Connection line (hidden on mobile) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent"></div>
                  )}
                  
                  {/* Step circle */}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 mx-auto w-20 h-20 rounded-2xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="mt-8 text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-4 text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom decorative line */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Premium badge */}
            <div className="mb-8 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              Professional Glazing Experts
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Ready to Start Your 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Glazing Project?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get a professional consultation and detailed estimate for your glazing needs. Our experts are ready to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative flex items-center">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link
                href="tel:+13465315049"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-lg font-semibold rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call (346) 531-5049
                </span>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-600" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}