import { Link } from 'react-router-dom';

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
      <section className="bg-gradient-to-r from-secondary-700 to-secondary-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-secondary-100">
              Explore our completed projects showcasing quality craftsmanship and attention to detail
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-secondary-700 hover:bg-primary-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-secondary-500">{project.title} Image</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-secondary-500">{project.status}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">{project.title}</h3>
                  <p className="text-secondary-600 text-sm mb-2">📍 {project.location}</p>
                  <p className="text-secondary-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-gray-100 text-secondary-600 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                    View Project Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Project Success Metrics</h2>
            <p className="text-xl text-secondary-600">
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
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Before & After Transformations</h2>
            <p className="text-xl text-secondary-600">
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
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-block"
                  >
                    Start Your Transformation
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-secondary-700 mb-2">Before</h4>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-secondary-500">Before Image</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary-700 mb-2">After</h4>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <span className="text-secondary-500">After Image</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Next Project</h2>
          <p className="text-xl mb-8 text-primary-100">
            Ready to transform your space? Let's discuss your vision and make it reality.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;