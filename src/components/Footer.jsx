import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setEmail("");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(""), 3000);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 text-white dark:bg-emerald-950 transition-colors" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 hover-scale">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-emerald-200">Maker Labs</span>
            </div>
            <p className="text-emerald-100 mb-6 max-w-md">
              Empowering creativity through hands-on technology and design. Join our community of makers, innovators, and learners.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-emerald-200">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-emerald-800 text-white placeholder-emerald-300 border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent dark:bg-emerald-900 dark:border-emerald-600 dark:placeholder-emerald-400 transition-all duration-200 hover-scale"
                  required
                  aria-label="Email address for newsletter"
                  aria-describedby="newsletter-status"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all duration-200 hover-scale click-ripple disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
              
              {/* Status message */}
              <div 
                id="newsletter-status"
                className={`mt-2 text-sm transition-all duration-300 ${
                  submitStatus === "success" 
                    ? "text-emerald-300 opacity-100" 
                    : "opacity-0"
                }`}
                role="status"
                aria-live="polite"
              >
                {submitStatus === "success" && "Thanks for subscribing! We'll keep you updated."}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200 hover-scale block"
                  aria-label="Go to home page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200 hover-scale block"
                  aria-label="Learn more about us"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs" 
                  className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200 hover-scale block"
                  aria-label="Explore our programs"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link 
                  to="/partners" 
                  className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200 hover-scale block"
                  aria-label="View our partners"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200 hover-scale block"
                  aria-label="Get in touch with us"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-200">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 hover-scale">
                <svg className="w-5 h-5 text-emerald-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:hello@makerlabs.org" 
                  className="text-emerald-100 hover:text-emerald-300 transition-colors duration-200"
                  aria-label="Send us an email"
                >
                  hello@makerlabs.org
                </a>
              </div>
              <div className="flex items-center space-x-2 hover-scale">
                <svg className="w-5 h-5 text-emerald-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-emerald-100">Coming Soon</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-emerald-200">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors duration-200 hover-scale"
                  aria-label="Visit our Twitter page"
                >
                  <svg className="w-5 h-5 text-emerald-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors duration-200 hover-scale"
                  aria-label="Visit our Instagram page"
                >
                  <svg className="w-5 h-5 text-emerald-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors duration-200 hover-scale"
                  aria-label="Visit our LinkedIn page"
                >
                  <svg className="w-5 h-5 text-emerald-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-emerald-300 text-sm mb-4 md:mb-0">
            © {currentYear} Maker Labs. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 hover-scale"
              aria-label="View privacy policy"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 hover-scale"
              aria-label="View terms of service"
            >
              Terms of Service
            </Link>
            <Link 
              to="/accessibility" 
              className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 hover-scale"
              aria-label="View accessibility statement"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 