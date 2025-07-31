import { FaExclamationTriangle, FaUsers, FaSearch, FaExclamationCircle, FaWrench, FaCheckCircle, FaChartBar, FaDollarSign, FaHardHat, FaShieldAlt } from 'react-icons/fa';

const Safety = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary-800 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Safety & Quality
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Above All Else
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
                Our unwavering commitment to safety standards and quality craftsmanship on every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="py-24 bg-neutral-50 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <FaShieldAlt className="text-2xl text-primary-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-8">Our Safety Philosophy</h2>
              <p className="text-lg text-secondary-600 mb-4">
                At Glazek LLC, safety isn't just a priority—it's the foundation of everything we do. 
                We believe that every worker has the right to return home safely at the end of each day, 
                and every client deserves a construction site that poses no risk to their family or property.
              </p>
              <p className="text-lg text-secondary-600 mb-4">
                Our comprehensive safety program goes beyond compliance with OSHA standards. We maintain 
                a culture of safety awareness where every team member is empowered to stop work if they 
                identify a potential hazard.
              </p>
              <p className="text-lg text-secondary-600">
                This commitment to safety has earned us zero lost-time accidents for over 5 years and 
                recognition from industry safety organizations.
              </p>
            </div>
            <div className="relative group">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl h-96 flex items-center justify-center shadow-soft group-hover:shadow-strong transition-all duration-300">
                <span className="text-secondary-500 text-lg">Safety Training Photo</span>
              </div>
              <div className="absolute -inset-2 bg-primary-100 rounded-2xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-24 bg-secondary-50 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">Our Safety Standards</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              We exceed industry standards through comprehensive safety protocols and continuous training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'OSHA Compliance',
                description: 'Full compliance with all OSHA regulations and standards, with regular updates as requirements evolve.',
                icon: FaExclamationTriangle
              },
              {
                title: 'Daily Safety Briefings',
                description: 'Every workday begins with a safety briefing covering potential hazards and safety procedures.',
                icon: FaUsers
              },
              {
                title: 'Personal Protective Equipment',
                description: 'All team members provided with and required to use proper PPE for their specific tasks.',
                icon: FaHardHat
              },
              {
                title: 'Site Safety Inspections',
                description: 'Regular safety inspections conducted by certified safety officers throughout each project.',
                icon: FaSearch
              },
              {
                title: 'Emergency Response Plans',
                description: 'Detailed emergency response procedures established for each job site with clear evacuation routes.',
                icon: FaExclamationCircle
              },
              {
                title: 'Tool & Equipment Safety',
                description: 'Regular inspection and maintenance of all tools and equipment to ensure safe operation.',
                icon: FaWrench
              }
            ].map((standard, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <standard.icon className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors">{standard.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{standard.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-neutral-50 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <FaCheckCircle className="text-2xl text-primary-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">Quality Assurance Program</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Multi-layer quality control ensures every project meets our exacting standards
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                phase: 'Planning & Design',
                description: 'Thorough review of all plans and specifications before construction begins',
                checks: [
                  'Structural engineering review',
                  'Building code compliance verification',
                  'Material specifications approval',
                  'Timeline and resource planning'
                ]
              },
              {
                phase: 'Construction Phase',
                description: 'Continuous quality monitoring throughout the construction process',
                checks: [
                  'Daily progress inspections',
                  'Material quality verification',
                  'Workmanship standards enforcement',
                  'Photo documentation of all phases'
                ]
              },
              {
                phase: 'Final Inspection',
                description: 'Comprehensive final inspection before project handover',
                checks: [
                  'Complete walk-through with client',
                  'Systems testing and verification',
                  'Punch list creation and completion',
                  'Warranty documentation review'
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl font-semibold text-secondary-800 mb-4">{phase.phase}</h3>
                  <p className="text-lg text-secondary-600 mb-6">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.checks.map((check, checkIndex) => (
                      <li key={checkIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        <span className="text-secondary-700">{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl h-64 flex items-center justify-center shadow-soft group-hover:shadow-strong transition-all duration-300">
                    <span className="text-secondary-500">{phase.phase} Image</span>
                  </div>
                  <div className="absolute -inset-2 bg-primary-100 rounded-2xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-secondary-50 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">Safety Certifications & Training</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Our team maintains current certifications and participates in ongoing safety education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'OSHA 30-Hour Construction',
              'First Aid/CPR Certified',
              'Fall Protection Training',
              'Hazard Communication',
              'Scaffolding Safety',
              'Electrical Safety',
              'Heavy Equipment Operation',
              'Confined Space Entry'
            ].map((cert, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaCheckCircle className="text-accent-600 text-2xl" />
                </div>
                <h3 className="font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-800 mb-4">Our Transparency Commitment</h2>
              <p className="text-xl text-secondary-600">
                We believe in complete transparency throughout your construction project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  <FaChartBar className="inline mr-2 text-primary-600" /> Project Transparency
                </h3>
                <ul className="space-y-3 text-secondary-600">
                  <li>• Daily progress photos and reports</li>
                  <li>• Real-time budget tracking</li>
                  <li>• Schedule updates and milestone notifications</li>
                  <li>• Change order documentation</li>
                  <li>• Regular client communication</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  <FaDollarSign className="inline mr-2 text-primary-600" /> Financial Transparency
                </h3>
                <ul className="space-y-3 text-secondary-600">
                  <li>• Detailed project estimates</li>
                  <li>• Clear pricing breakdown</li>
                  <li>• No hidden fees or surprise costs</li>
                  <li>• Transparent markup on materials</li>
                  <li>• Regular budget review meetings</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-secondary-600 mb-6">
                Have questions about our safety procedures or quality standards? We're happy to discuss 
                our processes in detail and provide references from recent clients.
              </p>
              <a
                href="/contact"
                className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-strong hover:shadow-glow transform hover:scale-105 transition-all duration-300 inline-block"
              >
                <span className="flex items-center justify-center">
                  Contact Us About Safety & Quality
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Statistics */}
      <section className="relative bg-primary-700 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Safety Record</h2>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Our commitment to safety is reflected in our outstanding safety record
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Years Without Lost-Time Accidents' },
              { number: '1000+', label: 'Safety Training Hours Annually' },
              { number: '100%', label: 'OSHA Compliance Rate' },
              { number: '0', label: 'Safety Violations in 2024' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-primary-200 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;