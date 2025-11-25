'use client';

import { Scale, Briefcase, FileText, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: "Practice Areas",
      description: "Comprehensive legal expertise across corporate law, litigation, real estate, family law, immigration, and intellectual property.",
      features: ["Corporate Law", "Litigation", "Real Estate", "IP Protection"]
    },
    {
      icon: Users,
      title: "Expert Attorneys",
      description: "Distinguished legal professionals with verified credentials, bar admissions, and proven track records in landmark cases.",
      features: ["Bar Certified", "Notable Cases", "Industry Leaders", "Peer Recognized"]
    },
    {
      icon: FileText,
      title: "Proven Results",
      description: "Documented case outcomes and client testimonials demonstrating our commitment to excellence and confidentiality.",
      features: ["Case Results", "Client Stories", "Success Metrics", "Confidential"]
    },
    {
      icon: Briefcase,
      title: "Legal Resources",
      description: "Expert insights and analysis through our comprehensive blog, keeping you informed on evolving legal landscapes.",
      features: ["Expert Blog", "Legal Updates", "Industry News", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider bg-amber-50 px-4 py-2 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional legal services with precision, integrity, and unwavering dedication to your success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-amber-600" strokeWidth={2} />
                  </div>
                  <div className="absolute top-0 left-0 w-16 h-16 bg-amber-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-slate-800 font-semibold group-hover:text-amber-600 transition-colors duration-300"
                >
                  Get Started
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-600/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need specialized legal assistance? Our team is ready to help.
          </p>
          <a
            href="#contact"
            className="inline-block bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
