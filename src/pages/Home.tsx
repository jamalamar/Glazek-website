import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaBuilding, 
  FaHammer, 
  FaClipboardList, 
  FaExclamationTriangle, 
  FaCheckCircle,
  FaShieldAlt,
  FaStar,
  FaComments
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary-800 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                Building Excellence with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Safety & Quality
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-secondary-300 max-w-3xl mx-auto leading-relaxed">
                Committed to completing projects with the highest standards of safety, 
                quality, and transparency, ensuring client satisfaction and building lasting relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-strong hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    Get a Quote
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/projects"
                  className="border-2 border-primary-500 text-primary-400 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-neutral-50 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-md"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">Our Services</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              From residential homes to commercial buildings, we deliver comprehensive construction solutions 
              tailored to your specific needs and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Construction',
                description: 'Custom homes and residential projects built to your vision with attention to every detail.',
                icon: FaHome
              },
              {
                title: 'Commercial Building',
                description: 'Professional commercial construction services for offices, retail, and industrial facilities.',
                icon: FaBuilding
              },
              {
                title: 'Renovations & Remodeling',
                description: 'Transform existing spaces with our expert renovation and remodeling services.',
                icon: FaHammer
              },
              {
                title: 'Project Management',
                description: 'Complete project oversight ensuring timelines, budgets, and quality standards are met.',
                icon: FaClipboardList
              },
              {
                title: 'Safety Compliance',
                description: 'Strict adherence to all safety protocols and building codes for every project.',
                icon: FaExclamationTriangle
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control processes to ensure the highest standards of workmanship.',
                icon: FaCheckCircle
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-700 transition-colors">{service.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{service.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="group inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-strong hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Our Services
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-secondary-50 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">Why Choose Glazek LLC</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is built on these core principles that guide every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Safety First',
                description: 'We prioritize the safety of our workers, clients, and the public in every aspect of our work.',
                icon: FaShieldAlt
              },
              {
                title: 'Quality Craftsmanship',
                description: 'Our experienced team delivers superior workmanship using the best materials and techniques.',
                icon: FaStar
              },
              {
                title: 'Transparent Communication',
                description: 'We maintain open, honest communication throughout every phase of your project.',
                icon: FaComments
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-strong group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                    <value.icon className="text-3xl text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-primary-100 rounded-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-semibold text-secondary-900 mb-6 group-hover:text-primary-700 transition-colors">{value.title}</h3>
                <p className="text-secondary-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-primary-700 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-100 leading-relaxed">
              Contact us today for a free consultation and let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-white text-primary-700 px-10 py-5 rounded-xl font-semibold text-lg shadow-strong hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Get in Touch
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;