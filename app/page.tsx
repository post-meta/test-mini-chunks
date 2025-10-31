import Link from 'next/link'
import { ArrowRight, Home, Ruler, Wrench, Sparkles, Phone, Mail } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Test Mini Closets</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Space with
              <span className="text-blue-600 block">Custom Mini Closets</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional closet design and organization solutions that maximize your space and simplify your life. 
              From consultation to installation, we create storage solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/gallery" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-blue-600"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Test Mini Closets?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in creating efficient, beautiful storage solutions that work for your lifestyle and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Custom Design</h4>
              <p className="text-gray-600">
                Every closet is designed specifically for your space, needs, and style preferences.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Installation</h4>
              <p className="text-gray-600">
                Professional installation by experienced craftsmen ensures perfect fit and finish.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h4>
              <p className="text-gray-600">
                High-quality materials and hardware for closets that look great and last for years.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Space Optimization</h4>
              <p className="text-gray-600">
                Maximize every inch of your closet space with smart organization solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From walk-in closets to reach-in solutions, we handle every aspect of your closet project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Walk-in Closets</h4>
                <p className="text-gray-600 mb-4">
                  Complete walk-in closet systems with custom shelving, hanging space, and accessories.
                </p>
                <Link href="/services" className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Reach-in Closets</h4>
                <p className="text-gray-600 mb-4">
                  Maximize small spaces with efficient reach-in closet organization systems.
                </p>
                <Link href="/services" className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Closet Makeovers</h4>
                <p className="text-gray-600 mb-4">
                  Transform existing closets with new organization systems and modern upgrades.
                </p>
                <Link href="/services" className="text-blue-600 font-medium hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Closet?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can maximize your storage space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border border-blue-400"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Home className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-xl font-bold text-white">Test Mini Closets</span>
              </div>
              <p className="text-gray-400">
                Professional closet design and organization solutions for your home.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
              <div className="space-y-2">
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
                <Link href="/gallery" className="block text-gray-400 hover:text-white transition-colors">Gallery</Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@testminiclosets.com</p>
                <p>Hours: Mon-Fri 9AM-6PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Test Mini Closets. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}