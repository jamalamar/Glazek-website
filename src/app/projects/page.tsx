import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight, Sparkles, Award, Target, Shield } from 'lucide-react'
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
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      placeholderIcon: '🏢',
      placeholderText: 'Commercial glazing project'
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
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      placeholderIcon: '🪟',
      placeholderText: 'Residential glazing project'
    }
  ]

  const categories = ['All', 'Commercial Glazing', 'Residential Glazing']

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Professional glazing project showcase"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300/10 rounded-full blur-lg"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Our Projects
            </h1>
            <p className="text-xl leading-8 text-blue-100 max-w-3xl mx-auto mb-12">
              Quality glazing installations that showcase our specialized expertise and commitment to excellence in every project.
            </p>
            
            {/* Simple stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Zero</div>
                <div className="text-blue-200 text-sm">Safety Incidents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Featured Project Spotlight */}
      <section className="py-32 relative overflow-hidden">
        {/* Background glass pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-50/80"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-slate-200/30 to-transparent rounded-full blur-2xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              <span>Spotlight Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Featured Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Showcasing our most remarkable achievement
            </p>
          </div>
          
          {/* Premium glass morphism card */}
          <div className="relative">
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-blue-100/30 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer rounded-3xl"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  {/* Project badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Target className="w-4 h-4" />
                    <span>Award-Winning Project</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Commercial Curtain Wall
                    <span className="block text-blue-600">Excellence</span>
                  </h3>
                  
                  <p className="text-lg text-slate-700 leading-relaxed">
                    A masterpiece of modern glazing engineering. This high-rise curtain wall installation showcases our commitment to precision, safety, and client satisfaction—delivered 
                    <span className="font-semibold text-emerald-600"> 2 weeks ahead of schedule</span> with 
                    <span className="font-semibold text-emerald-600"> zero safety incidents</span>.
                  </p>
                  
                  {/* Achievement grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/50 backdrop-blur-sm border border-white/40 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold text-emerald-600">2 weeks</span>
                      </div>
                      <span className="text-sm text-slate-600">Ahead of Schedule</span>
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm border border-white/40 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold text-emerald-600">Zero</span>
                      </div>
                      <span className="text-sm text-slate-600">Safety Incidents</span>
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm border border-white/40 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-blue-500" />
                        <span className="font-bold text-blue-600">Premium</span>
                      </div>
                      <span className="text-sm text-slate-600">Structural Glazing</span>
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm border border-white/40 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-blue-500" />
                        <span className="font-bold text-blue-600">100%</span>
                      </div>
                      <span className="text-sm text-slate-600">Client Satisfaction</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Image container with glass effects */}
                  <div className="relative group">
                    {/* Glass frame */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 to-slate-200/20 backdrop-blur-sm rounded-2xl border border-white/40 group-hover:from-blue-300/40 group-hover:to-slate-300/30 transition-all duration-500"></div>
                    
                    <div className="relative aspect-[4/3] bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/30 group-hover:shadow-2xl transition-all duration-500">
                      <Image
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Modern Office Building - Featured Project"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-blue-600/10"></div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Glass background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50"></div>
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-radial from-slate-100/50 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Portfolio Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6">
              Project Portfolio
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Explore our diverse range of glazing excellence across commercial and residential projects
            </p>
            
            {/* Enhanced filter buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`group relative px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-white/60 backdrop-blur-sm border border-white/40 text-slate-700 hover:bg-white/80 hover:text-blue-600 hover:border-blue-300/50'
                  }`}
                >
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer rounded-full"></div>
                  <span className="relative">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Premium project cards grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                {/* Glass morphism card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-slate-100/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"></div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-3xl transition-opacity duration-300"></div>
                
                <div className="relative p-6">
                  {/* Image container with enhanced effects */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    {/* Glass frame effect */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-200/30 to-slate-200/20 backdrop-blur-sm rounded-2xl border border-white/30 group-hover:from-blue-300/40 group-hover:to-slate-300/30 transition-all duration-500"></div>
                    
                    <div className="relative aspect-[4/3] bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/40">
                      <ImagePlaceholder
                        src={project.imageUrl}
                        alt={`${project.title} - ${project.category} project in ${project.location}`}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                        placeholderIcon={project.placeholderIcon}
                        placeholderText={project.placeholderText}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-blue-600/20 group-hover:from-slate-900/20 transition-all duration-500"></div>
                      
                      {/* Category badge floating */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-blue-700 border border-white/50">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Year badge floating */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-slate-600 border border-white/50">
                          <Calendar className="h-3 w-3" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                    
                    <p className="text-slate-700 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-2 pt-4">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/40">
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                          <span className="text-sm text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* View details button
                    <div className="pt-4">
                      <button className="group/btn w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2">
                        <span>View Project Details</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Performance Metrics Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Multi-layer glass background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/50 via-transparent to-slate-700/30"></div>
        
        {/* Animated glass orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-white/10 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-radial from-blue-300/20 to-transparent rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full animate-ping animation-delay-2000"></div>
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              <span>Performance Excellence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Track Record
              <span className="block text-2xl md:text-3xl font-medium text-blue-100 mt-2">
                of Excellence
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              These authentic metrics demonstrate our unwavering commitment to excellence, safety, and client satisfaction across every project we undertake.
            </p>
          </div>

          {/* Enhanced metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="group relative">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-blue-200/20 backdrop-blur-xl border border-white/30 rounded-3xl group-hover:from-white/30 group-hover:to-blue-200/30 transition-all duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-3xl transition-opacity duration-300"></div>
              
              <div className="relative text-center p-8">
                <div className="mb-4">
                  <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Project Success Rate</div>
                <div className="text-sm text-blue-200 opacity-80">Every project delivered to perfection</div>
              </div>
            </div>
            
            {/* Metric 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-emerald-200/20 backdrop-blur-xl border border-white/30 rounded-3xl group-hover:from-white/30 group-hover:to-emerald-200/30 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-3xl transition-opacity duration-300"></div>
              
              <div className="relative text-center p-8">
                <div className="mb-4">
                  <Target className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-2">On-Time Delivery</div>
                <div className="text-sm text-blue-200 opacity-80">Consistently ahead of schedule</div>
              </div>
            </div>
            
            {/* Metric 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-blue-200/20 backdrop-blur-xl border border-white/30 rounded-3xl group-hover:from-white/30 group-hover:to-blue-200/30 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-3xl transition-opacity duration-300"></div>
              
              <div className="relative text-center p-8">
                <div className="mb-4">
                  <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    Zero
                  </div>
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Safety Incidents</div>
                <div className="text-sm text-blue-200 opacity-80">Uncompromising safety standards</div>
              </div>
            </div>
            
            {/* Metric 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-blue-200/20 backdrop-blur-xl border border-white/30 rounded-3xl group-hover:from-white/30 group-hover:to-blue-200/30 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-3xl transition-opacity duration-300"></div>
              
              <div className="relative text-center p-8">
                <div className="mb-4">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    Texas
                  </div>
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Based, Nationwide</div>
                <div className="text-sm text-blue-200 opacity-80">Local expertise, national reach</div>
              </div>
            </div>
          </div>
          
          {/* Additional performance highlights */}
          <div className="mt-20 text-center">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Glazek LLC?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span>Premium quality materials and installation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span>Comprehensive safety protocols and training</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span>Proven track record of client satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Glass background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-slate-100/40"></div>
        
        {/* Animated glass elements */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-radial from-slate-200/30 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Glass morphism container */}
          <div className="relative">
            {/* Background glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-blue-100/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl"></div>
            
            {/* Shimmer animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer rounded-3xl"></div>
            
            <div className="relative p-12 md:p-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Begin?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
                Start Your Next
                <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Glazing Project
                </span>
              </h2>
              
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12">
                Transform your vision into reality with Texas's premier glazing specialists. 
                <span className="font-semibold text-blue-600">Expert installation</span>, 
                <span className="font-semibold text-blue-600">premium materials</span>, and 
                <span className="font-semibold text-blue-600">unmatched reliability</span>.
              </p>
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 min-w-[280px]"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer rounded-2xl"></div>
                  
                  <div className="relative flex items-center justify-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="tel:+13465315049"
                    className="group px-8 py-5 border-2 border-blue-600 text-lg font-bold rounded-2xl text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/50 backdrop-blur-sm min-w-[240px]"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 animate-pulse"></div>
                      <span>Call (346) 531-5049</span>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 bg-white/40 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/40">
                  <Shield className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold text-slate-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/40 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/40">
                  <Award className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold text-slate-700">100% Satisfaction</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/40 backdrop-blur-sm rounded-xl py-4 px-6 border border-white/40">
                  <Target className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold text-slate-700">Free Estimates</span>
                </div>
              </div>
              
              {/* Urgency message */}
              <div className="mt-12 bg-gradient-to-r from-blue-600/10 to-blue-700/10 backdrop-blur-sm border border-blue-200/50 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-blue-800 font-medium">
                  <span className="font-bold">Limited availability:</span> Our expert team is booking projects for the next quarter. 
                  Contact us today to secure your preferred installation dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}