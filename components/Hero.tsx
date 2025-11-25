'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Cases Won' },
    { value: '98%', label: 'Success Rate' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
          alt="Legal background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-600/20 border border-amber-600/30 rounded-full px-5 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-semibold tracking-wide">TRUSTED LEGAL COUNSEL</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Excellence in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Legal Representation
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Providing sophisticated legal solutions with unwavering dedication to justice. 
              Our experienced attorneys deliver results that exceed expectations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="group px-8 py-4 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-500 hover:shadow-2xl hover:shadow-amber-600/50 transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Schedule Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border-2 border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Explore Services
              </Link>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {achievements.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1920&q=80"
                  alt="Professional legal team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 max-w-xs border-t-4 border-amber-600">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-slate-800 font-bold text-lg mb-1">Award Winning</div>
                    <div className="text-gray-600 text-sm">Recognized for excellence in legal practice and client satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-amber-600/30 rounded-2xl" />
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-400 rounded-full blur-2xl opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#services" className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors">
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
