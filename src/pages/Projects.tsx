import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Modern Family Home',
      category: 'Residential',
      location: 'Suburban Heights',
      description: 'Custom 3,500 sq ft modern family home featuring open concept design, smart home technology, and sustainable materials.',
      features: ['4 Bedrooms', '3.5 Bathrooms', 'Smart Home Integration', 'Energy Efficient'],
      status: 'Completed 2024',
      image: 'modern-family-home.jpg'
    },
    {
      title: 'Downtown Office Complex',
      category: 'Commercial',
      location: 'City Center',
      description: 'Multi-story office building with modern amenities, flexible workspace design, and LEED certification.',
      features: ['50,000 sq ft', 'LEED Certified', 'Modern Amenities', 'Flexible Workspaces'],
      status: 'Completed 2024',
      image: 'downtown-office.jpg'
    },
    {
      title: 'Historic Home Renovation',
      category: 'Renovation',
      location: 'Old Town District',
      description: 'Complete restoration of 1920s colonial home preserving historic charm while adding modern conveniences.',
      features: ['Historic Preservation', 'Modern Updates', 'Original Character Maintained', 'Energy Upgrades'],
      status: 'Completed 2023',
      image: 'historic-renovation.jpg'
    },
    {
      title: 'Luxury Kitchen Remodel',
      category: 'Remodeling',
      location: 'Residential Estate',
      description: 'High-end kitchen transformation featuring custom cabinetry, premium appliances, and stunning quartz countertops.',
      features: ['Custom Cabinetry', 'Premium Appliances', 'Quartz Countertops', 'Under-Cabinet Lighting'],
      status: 'Completed 2023',
      image: 'luxury-kitchen.jpg'
    },
    {
      title: 'Retail Shopping Center',
      category: 'Commercial',
      location: 'Commercial District',
      description: 'Multi-tenant retail center with modern storefronts, ample parking, and excellent visibility.',
      features: ['Multiple Tenants', 'Modern Design', 'Ample Parking', 'High Visibility'],
      status: 'Completed 2023',
      image: 'retail-center.jpg'
    },
    {
      title: 'Basement Finishing Project',
      category: 'Renovation',
      location: 'Suburban Residence',
      description: 'Complete basement transformation into entertainment space with home theater, bar area, and guest suite.',
      features: ['Home Theater', 'Wet Bar', 'Guest Suite', 'Custom Storage'],
      status: 'Completed 2024',
      image: 'basement-finishing.jpg'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Remodeling'];

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
                Our Project
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
                Explore our completed projects showcasing quality craftsmanship and attention to detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-neutral-50 bg-gradient-to-b from-white to-neutral-50 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-strong' 
                    : 'bg-white text-secondary-700 shadow-soft hover:shadow-strong hover:text-primary-700 border border-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-soft hover:shadow-strong overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100">
                <div className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 h-48 flex items-center justify-center overflow-hidden">
                  <span className="text-secondary-500">{project.title} Image</span>
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-sm text-secondary-500 font-medium">{project.status}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">{project.title}</h3>
                  <p className="text-secondary-600 text-sm mb-2 flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-primary-600" /> {project.location}
                  </p>
                  <p className="text-secondary-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-gray-100 text-secondary-600 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="group/btn inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                    View Project Details
                    <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-secondary-50 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">Project Success Metrics</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'On-Time Delivery' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '15', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-display font-bold text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-secondary-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-24 bg-neutral-50 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">Before & After Transformations</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              See the dramatic transformations we've achieved for our clients
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: 'Kitchen Renovation Transformation',
                before: 'kitchen-before.jpg',
                after: 'kitchen-after.jpg',
                description: 'Complete kitchen overhaul from outdated 1980s design to modern culinary workspace'
              },
              {
                title: 'Bathroom Modernization',
                before: 'bathroom-before.jpg',
                after: 'bathroom-after.jpg', 
                description: 'Transformed cramped bathroom into spa-like retreat with luxury finishes'
              }
            ].map((transformation, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-800 mb-4">{transformation.title}</h3>
                  <p className="text-lg text-secondary-600 mb-6">{transformation.description}</p>
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold shadow-strong hover:shadow-glow transform hover:scale-105 transition-all duration-300 inline-block"
                  >
                    <span className="flex items-center">
                      Start Your Transformation
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-secondary-700 mb-2">Before</h4>
                    <div className="relative group/img bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl h-48 flex items-center justify-center shadow-soft hover:shadow-strong transition-all duration-300">
                      <span className="text-secondary-500">Before Image</span>
                      <div className="absolute inset-0 bg-red-600/0 group-hover/img:bg-red-600/10 rounded-xl transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary-700 mb-2">After</h4>
                    <div className="relative group/img bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl h-48 flex items-center justify-center shadow-soft hover:shadow-strong transition-all duration-300">
                      <span className="text-secondary-500">After Image</span>
                      <div className="absolute inset-0 bg-accent-600/0 group-hover/img:bg-accent-600/10 rounded-xl transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary-700 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Start Your Next Project</h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-100 leading-relaxed">
              Ready to transform your space? Let's discuss your vision and make it reality.
            </p>
            <Link
              to="/contact"
              className="group bg-white text-primary-700 px-10 py-5 rounded-xl font-semibold text-lg shadow-strong hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              <span className="flex items-center justify-center">
                Get Started Today
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;