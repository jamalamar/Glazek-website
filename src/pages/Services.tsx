import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes and residential projects built to your exact specifications with attention to every detail.',
      features: [
        'Custom Home Building',
        'Home Additions & Extensions',
        'Kitchen & Bathroom Remodeling',
        'Basement Finishing',
        'Deck & Patio Construction',
        'Garage Construction'
      ],
      icon: '🏠',
      image: 'residential-construction.jpg'
    },
    {
      title: 'Commercial Construction',
      description: 'Professional commercial construction services for offices, retail spaces, and industrial facilities.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Warehouses & Industrial',
        'Restaurant Buildouts',
        'Medical Facilities',
        'Educational Buildings'
      ],
      icon: '🏢',
      image: 'commercial-construction.jpg'
    },
    {
      title: 'Renovations & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      features: [
        'Interior Renovations',
        'Exterior Renovations',
        'Historic Restoration',
        'Accessibility Modifications',
        'Energy Efficiency Upgrades',
        'Space Optimization'
      ],
      icon: '🔨',
      image: 'renovation-remodeling.jpg'
    },
    {
      title: 'Project Management',
      description: 'Complete project oversight ensuring timelines, budgets, and quality standards are met.',
      features: [
        'Timeline Management',
        'Budget Control',
        'Vendor Coordination',
        'Quality Assurance',
        'Progress Reporting',
        'Risk Management'
      ],
      icon: '📋',
      image: 'project-management.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl text-primary-100">
              Comprehensive construction solutions tailored to your specific needs and timeline
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-secondary-800">{service.title}</h2>
                  </div>
                  <p className="text-lg text-secondary-600 mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        <span className="text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block"
                  >
                    Get Quote for {service.title}
                  </Link>
                </div>
                <div className={`bg-gray-200 rounded-lg h-80 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <span className="text-secondary-500 text-lg">{service.title} Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Our Construction Process</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your project is completed on time, on budget, and to your exact specifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to understand your vision, needs, and budget requirements.'
              },
              {
                step: '02',
                title: 'Planning & Design',
                description: 'Detailed planning, design development, and permit acquisition.'
              },
              {
                step: '03',
                title: 'Construction',
                description: 'Skilled execution with regular progress updates and quality checks.'
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final inspection, walkthrough, and project handover with warranties.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">{process.title}</h3>
                <p className="text-secondary-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Why Choose Glazek LLC</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed contractor with comprehensive insurance coverage for your peace of mind.',
                icon: '🛡️'
              },
              {
                title: 'Quality Materials',
                description: 'We use only the highest quality materials from trusted suppliers and manufacturers.',
                icon: '⚡'
              },
              {
                title: 'Experienced Team',
                description: 'Our skilled craftsmen bring decades of combined experience to every project.',
                icon: '👥'
              },
              {
                title: 'On-Time Delivery',
                description: 'We respect your schedule and consistently deliver projects on time and on budget.',
                icon: '⏰'
              },
              {
                title: '24/7 Support',
                description: 'Available around the clock for emergency situations and ongoing support.',
                icon: '📞'
              },
              {
                title: 'Warranty Protection',
                description: 'Comprehensive warranties on all work performed, ensuring long-term satisfaction.',
                icon: '✅'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Construction Project?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for a free consultation and detailed project estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 inline-block"
            >
              Get Free Quote
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 inline-block"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;