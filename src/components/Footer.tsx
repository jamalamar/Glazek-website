const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 text-gray-100 px-3 py-2 rounded-lg font-bold text-xl">
              G
            </div>
            <span className="text-xl font-bold text-gray-100">Glazek LLC</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-1">(555) 123-4567 • info@glazekllc.com</p>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Glazek LLC. All rights reserved. Licensed & Insured.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;