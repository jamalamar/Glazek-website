import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
                Get In
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
                Ready to start your construction project? Contact us for a free consultation and quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-neutral-50 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <FaEnvelope className="text-2xl text-primary-600" />
              </div>
              <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">Request a Quote</h2>
              <p className="text-lg text-secondary-600 mb-10 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours with a detailed estimate for your project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-primary-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-primary-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-primary-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-primary-300"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="addition">Home Addition</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 hover:border-primary-300 resize-none"
                    placeholder="Please describe your project, timeline, budget range, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-5 px-8 rounded-xl font-semibold text-lg shadow-strong hover:shadow-glow transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center group"
                >
                  Submit Request
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-800 mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105">
                    <FaPhone className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-800 mb-1">Phone</h3>
                    <p className="text-secondary-600">Main: (555) 123-4567</p>
                    <p className="text-secondary-600">Emergency: (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105">
                    <FaEnvelope className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-800 mb-1">Email</h3>
                    <p className="text-secondary-600">info@glazekllc.com</p>
                    <p className="text-secondary-600">quotes@glazekllc.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105">
                    <FaMapMarkerAlt className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-800 mb-1">Office Address</h3>
                    <p className="text-secondary-600">
                      123 Construction Avenue<br />
                      Your City, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105">
                    <FaClock className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-800 mb-1">Business Hours</h3>
                    <p className="text-secondary-600">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Emergency calls only
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-secondary-800 mb-4">Service Areas</h3>
                <p className="text-secondary-600 mb-4">
                  We proudly serve the following areas:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-secondary-600">
                  <div>• Your City</div>
                  <div>• Neighboring Town</div>
                  <div>• Suburb Heights</div>
                  <div>• Commercial District</div>
                  <div>• Industrial Area</div>
                  <div>• Historic District</div>
                </div>
                <p className="text-sm text-secondary-500 mt-4">
                  Don't see your area listed? Contact us - we may still be able to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-neutral-100 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-4">Find Our Office</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Visit us at our convenient location or schedule a site visit
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-neutral-100 border-2 border-neutral-200 rounded-xl h-96 flex items-center justify-center shadow-medium">
            <span className="text-secondary-500 text-lg font-medium">Interactive Map Coming Soon</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-neutral-50 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-secondary-600">Common questions about our construction services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How long does a typical construction project take?',
                answer: 'Project timelines vary based on size and complexity. Small renovations may take 2-4 weeks, while custom homes typically require 4-8 months. We provide detailed timelines during the planning phase.'
              },
              {
                question: 'Do you handle permits and inspections?',
                answer: 'Yes, we handle all necessary permits and coordinate with local authorities for required inspections. This is included in our comprehensive project management service.'
              },
              {
                question: 'What is your payment schedule?',
                answer: 'We typically work with a payment schedule tied to project milestones. A small deposit secures your project start date, with progress payments made as work is completed.'
              },
              {
                question: 'Are you licensed and insured?',
                answer: 'Yes, Glazek LLC is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers compensation for your protection and peace of mind.'
              },
              {
                question: 'Do you provide warranties on your work?',
                answer: 'We stand behind our work with comprehensive warranties. Specific warranty terms vary by project type, but we ensure all work meets our high-quality standards.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-neutral-50 border-2 border-neutral-200 rounded-xl shadow-medium p-8 hover:shadow-strong transition-all duration-200 hover:border-primary-200">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{faq.question}</h3>
                <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-500 bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Emergency Construction Services</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Need immediate assistance? We offer 24/7 emergency services for urgent construction issues.
          </p>
          <a
            href="tel:5551234568"
            className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-50 shadow-strong hover:shadow-glow transform hover:scale-105 transition-all duration-200 inline-flex items-center group"
          >
            Call Emergency Line: (555) 123-4568
            <FaPhone className="ml-3 group-hover:scale-110 transition-transform duration-200" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;