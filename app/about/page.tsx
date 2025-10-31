import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const business = "Test Mini Closets";
  const location = "Seattle, WA";
  const phone = "(206) 555-0100";
  
  const aboutContent = {
    heading: "Revolutionizing Seattle's Storage Solutions Daily",
    story: ["Test Mini Closets began in Seattle with a simple vision: providing compact, efficient storage solutions for urban dwellers facing space challenges in the Pacific Northwest's bustling city.","Our innovative mini closet systems help Seattle residents maximize their living spaces while maintaining style and functionality, perfectly suited for apartments, condos, and small homes."],
    mission: "To transform how Seattle residents organize and optimize their living spaces through innovative, space-saving mini closet solutions that blend functionality with modern design.",
    values: [{"title":"Organized Living","description":"We believe every space should maximize functionality and beauty, creating harmony between your belongings and daily lifestyle needs."}]
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{aboutContent.heading}</h1>
          <p className="text-xl text-blue-100">Serving {location} with Excellence</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Story</h2>
          <div className="space-y-4 text-lg text-gray-700">
            {aboutContent.story.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-xl text-gray-700">{aboutContent.mission}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.values.map((value, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Work With {business}</h2>
          <p className="text-xl mb-8 text-blue-100">Experience the difference of working with a trusted {location} company.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {phone && (
              <a href={`tel:${phone}`} className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                Call {phone}
              </a>
            )}
            <Link href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
