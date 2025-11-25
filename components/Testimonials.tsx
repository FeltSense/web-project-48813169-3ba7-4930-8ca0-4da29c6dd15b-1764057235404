'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, TechVentures Inc.',
    avatar: 'https://i.pravatar.cc/150?img=47',
    content: 'The level of professionalism and expertise displayed was exceptional. They navigated our complex corporate merger with precision and care, ensuring every detail was handled flawlessly.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Real Estate Developer',
    avatar: 'https://i.pravatar.cc/150?img=33',
    content: 'Outstanding legal counsel that truly understands business needs. Their strategic approach saved us significant time and resources while protecting our interests at every turn.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Founder, Innovation Labs',
    avatar: 'https://i.pravatar.cc/150?img=29',
    content: 'Remarkable attention to detail and client communication. They made what seemed like an overwhelming legal challenge feel manageable, guiding us to a successful resolution.',
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Quote className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by industry leaders who value excellence and integrity
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    fill
                    className="rounded-full border-4 border-amber-600 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-8 h-8 text-amber-600 mb-4 mx-auto md:mx-0 opacity-50" />
                <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6">
                  {testimonials[current].content}
                </p>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-amber-600 font-medium">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-slate-700 hover:bg-amber-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-amber-600 w-8' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-slate-700 hover:bg-amber-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </button>);
}
