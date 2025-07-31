const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                G
              </div>
              <span className="text-2xl font-bold">Glazek LLC</span>
            </div>
            <p className="text-secondary-300 mb-4 max-w-md">
              Committed to completing projects with the highest standards of safety, 
              quality, and transparency, ensuring client satisfaction and building lasting relationships.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>Residential Construction</li>
              <li>Commercial Building</li>
              <li>Renovations & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-secondary-300">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@glazekllc.com</p>
              <p>Address: 123 Construction Ave<br />Your City, ST 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Glazek LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;