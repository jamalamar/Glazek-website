const Safety = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Safety & Quality First
            </h1>
            <p className="text-xl text-red-100">
              Our unwavering commitment to safety standards and quality craftsmanship on every project
            </p>
          </div>
        </div>
      </section>

      {/* Safety Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-800 mb-6">Our Safety Philosophy</h2>
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
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-secondary-500 text-lg">Safety Training Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Our Safety Standards</h2>
            <p className="text-xl text-secondary-600">
              We exceed industry standards through comprehensive safety protocols and continuous training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'OSHA Compliance',
                description: 'Full compliance with all OSHA regulations and standards, with regular updates as requirements evolve.',
                icon: '⚠️'
              },
              {
                title: 'Daily Safety Briefings',
                description: 'Every workday begins with a safety briefing covering potential hazards and safety procedures.',
                icon: '👥'
              },
              {
                title: 'Personal Protective Equipment',
                description: 'All team members provided with and required to use proper PPE for their specific tasks.',
                icon: '🦺'
              },
              {
                title: 'Site Safety Inspections',
                description: 'Regular safety inspections conducted by certified safety officers throughout each project.',
                icon: '🔍'
              },
              {
                title: 'Emergency Response Plans',
                description: 'Detailed emergency response procedures established for each job site with clear evacuation routes.',
                icon: '🚨'
              },
              {
                title: 'Tool & Equipment Safety',
                description: 'Regular inspection and maintenance of all tools and equipment to ensure safe operation.',
                icon: '🔧'
              }
            ].map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">{standard.title}</h3>
                <p className="text-secondary-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Quality Assurance Program</h2>
            <p className="text-xl text-secondary-600">
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
                <div className={`bg-gray-200 rounded-lg h-64 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-secondary-500">{phase.phase} Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Safety Certifications & Training</h2>
            <p className="text-xl text-secondary-600">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-secondary-800">{cert}</h3>
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
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">
                  📊 Project Transparency
                </h3>
                <ul className="space-y-3 text-secondary-600">
                  <li>• Daily progress photos and reports</li>
                  <li>• Real-time budget tracking</li>
                  <li>• Schedule updates and milestone notifications</li>
                  <li>• Change order documentation</li>
                  <li>• Regular client communication</li>
                </ul>
              </div>

              <div className="bg-secondary-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">
                  💰 Financial Transparency
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
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 inline-block"
              >
                Contact Us About Safety & Quality
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Statistics */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Safety Record</h2>
            <p className="text-xl text-primary-100">
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
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;