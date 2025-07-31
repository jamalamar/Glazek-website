import { FaBullseye, FaEye, FaGem, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Glazek LLC
            </h1>
            <p className="text-xl text-secondary-100">
              Building trust and excellence in construction for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-800 mb-6">Our Story</h2>
              <p className="text-lg text-secondary-600 mb-4">
                Founded with a vision to transform the construction industry through unwavering 
                commitment to safety, quality, and transparency, Glazek LLC has grown from a small 
                team of dedicated professionals to a trusted name in construction.
              </p>
              <p className="text-lg text-secondary-600 mb-4">
                Our journey began with a simple belief: every project deserves the highest standards 
                of craftsmanship, no matter the size or complexity. This philosophy continues to guide 
                us today as we build lasting relationships with our clients and communities.
              </p>
              <p className="text-lg text-secondary-600">
                We take pride in our transparent approach to project management, ensuring our clients 
                are informed every step of the way. From initial consultation to project completion, 
                we maintain open communication and deliver on our promises.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-secondary-500 text-lg">Construction Team Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Our Foundation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBullseye className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Mission</h3>
              <p className="text-secondary-600">
                To deliver exceptional construction services that exceed client expectations while 
                maintaining the highest standards of safety, quality, and professional integrity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEye className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Vision</h3>
              <p className="text-secondary-600">
                To be the most trusted construction partner in our community, known for our 
                commitment to transparency, innovation, and building lasting relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGem className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Values</h3>
              <ul className="text-secondary-600 text-left">
                <li>• Safety-first approach</li>
                <li>• Quality craftsmanship</li>
                <li>• Transparent communication</li>
                <li>• Integrity in all dealings</li>
                <li>• Client satisfaction focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our experienced professionals bring decades of combined expertise to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Glazek',
                role: 'Founder & CEO',
                experience: '15+ years experience',
                specialties: 'Project Management, Client Relations'
              },
              {
                name: 'Sarah Mitchell',
                role: 'Project Manager',
                experience: '12+ years experience',
                specialties: 'Residential Construction, Quality Control'
              },
              {
                name: 'Mike Rodriguez',
                role: 'Safety Director',
                experience: '10+ years experience',
                specialties: 'Safety Compliance, Risk Management'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-secondary-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-secondary-600 mb-2">{member.experience}</p>
                <p className="text-sm text-secondary-500">{member.specialties}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">Certifications & Credentials</h2>
            <p className="text-xl text-secondary-600">
              Our commitment to excellence is backed by industry certifications and credentials
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Licensed Contractor',
              'OSHA Certified',
              'Bonded & Insured',
              'Quality Assurance Certified',
              'Environmental Safety',
              'Building Code Compliance',
              'Project Management Professional',
              'Safety Training Certified'
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="text-primary-600 text-xl" />
                </div>
                <p className="text-sm font-medium text-secondary-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;