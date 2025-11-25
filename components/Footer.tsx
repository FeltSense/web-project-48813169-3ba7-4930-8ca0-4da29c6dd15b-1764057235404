'use client'

import { Scale, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Newsletter Section with Gold Accent */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Informed on Legal Matters
              </h3>
              <p className="text-gray-400">
                Subscribe to receive expert insights, case updates, and legal news directly to your inbox.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  {isSubmitted ? 'Subscribed!' : 'Subscribe'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Prestige Legal</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering excellence in legal representation with integrity, expertise, and unwavering commitment to our clients.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-amber-600 pl-3">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {[
                'Corporate Law',
                'Litigation',
                'Real Estate',
                'Intellectual Property',
                'Employment Law',
                'Tax Law'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-amber-600 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-amber-600 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact Us', href: '#contact' },
                { label: 'Careers', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-600 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 border-l-4 border-amber-600 pl-3">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    1200 Justice Boulevard<br />
                    Suite 450, New York, NY 10001
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a href="tel:+12125551234" className="text-sm text-gray-400 hover:text-amber-600 transition-colors">
                    +1 (212) 555-1234
                  </a>
                  <p className="text-xs text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a href="mailto:contact@prestigelegal.com" className="text-sm text-gray-400 hover:text-amber-600 transition-colors break-all">
                    contact@prestigelegal.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Prestige Legal Partners. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#privacy" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">
                Terms of Service
              </a>
              <a href="#disclaimer" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">
                Legal Disclaimer
              </a>
              <a href="#accessibility" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
    </footer>
  )
}
