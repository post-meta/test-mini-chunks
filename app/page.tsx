import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Test Mini Closets</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/services" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/gallery" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Gallery
                </Link>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-16 lg:mb-0">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Space with 
                <span className="text-blue-600 block">Custom Closets</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional closet organization and custom storage solutions tailored to your lifestyle. 
                Maximize your space and minimize the clutter with our expert design services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                  Get Free Consultation
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition duration-300">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Custom Closet Image</span>
                </div>
              </div>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovative design with practical solutions to create closets that work for your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Custom Design</h4>
              <p className="text-gray-600">
                Every closet is uniquely designed to fit your space, style, and storage needs perfectly.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Quick Installation</h4>
              <p className="text-gray-600">
                Professional installation completed efficiently with minimal disruption to your daily routine.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Quality Materials</h4>
              <p className="text-gray-600">
                Premium materials and hardware ensure your closet system will last for years to come.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Space Optimization</h4>
              <p className="text-gray-600">
                Maximize every inch of your closet space with smart storage solutions and organization systems.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Satisfaction Guaranteed</h4>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties and exceptional customer service.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Competitive Pricing</h4>
              <p className="text-gray-600">
                Get the best value for your investment with transparent pricing and no hidden fees.
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From walk-in closets to reach-in solutions, we handle every aspect of your closet transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Walk-in Closet</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Walk-in Closets</h4>
                <p className="text-gray-600 mb-4">
                  Transform your walk-in closet into a luxurious dressing room with custom shelving, drawers, and hanging systems.
                </p>
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Reach-in Closet</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Reach-in Closets</h4>
                <p className="text-gray-600 mb-4">
                  Maximize small spaces with smart reach-in closet solutions that double your storage capacity.
                </p>
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Organization</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Organization Systems</h4>
                <p className="text-gray-600 mb-4">
                  Professional organization services to help you maintain a clutter-free and functional closet space.
                </p>
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Closet?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Get started with a free consultation and discover how