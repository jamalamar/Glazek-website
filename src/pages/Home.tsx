import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building Excellence with
              <span className="block text-primary-100">Safety & Quality</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Committed to completing projects with the highest standards of safety, 
              quality, and transparency, ensuring client satisfaction and building lasting relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Get a Quote
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">Our Services</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From residential homes to commercial buildings, we deliver comprehensive construction solutions 
              tailored to your specific needs and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Construction',
                description: 'Custom homes and residential projects built to your vision with attention to every detail.',
                icon: '🏠'
              },
              {
                title: 'Commercial Building',
                description: 'Professional commercial construction services for offices, retail, and industrial facilities.',
                icon: '🏢'
              },
              {
                title: 'Renovations & Remodeling',
                description: 'Transform existing spaces with our expert renovation and remodeling services.',
                icon: '🔨'
              },
              {
                title: 'Project Management',
                description: 'Complete project oversight ensuring timelines, budgets, and quality standards are met.',
                icon: '📋'
              },
              {
                title: 'Safety Compliance',
                description: 'Strict adherence to all safety protocols and building codes for every project.',
                icon: '⚠️'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control processes to ensure the highest standards of workmanship.',
                icon: '✅'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 inline-block"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">Why Choose Glazek LLC</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our commitment to excellence is built on these core principles that guide every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safety First',
                description: 'We prioritize the safety of our workers, clients, and the public in every aspect of our work.',
                icon: '🛡️'
              },
              {
                title: 'Quality Craftsmanship',
                description: 'Our experienced team delivers superior workmanship using the best materials and techniques.',
                icon: '⭐'
              },
              {
                title: 'Transparent Communication',
                description: 'We maintain open, honest communication throughout every phase of your project.',
                icon: '💬'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-secondary-800 mb-4">{value.title}</h3>
                <p className="text-secondary-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;