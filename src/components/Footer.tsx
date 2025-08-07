import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Glazek LLC</h3>
            <p className="text-gray-300 mb-4">
              Delivering superior construction solutions through collaborative, technology-driven processes with the highest standards of safety, quality, and transparency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">(346) 531-5049</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">info@glazekllc.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">Your City, State</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300">
            © {currentYear} Glazek LLC. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Made by{' '}
            <Link 
              href="https://digihoriz.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              DigiHoriz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}