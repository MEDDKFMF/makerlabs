import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";

function Home() {
  return (
    <div className="relative overflow-hidden dark:bg-emerald-950 transition-colors">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient-x bg-gradient-to-tr from-emerald-400 via-emerald-200 to-emerald-600 opacity-80 dark:from-emerald-900 dark:via-emerald-800 dark:to-emerald-950" />
      {/* SVG Blob */}
      <svg className="absolute top-0 right-0 w-64 h-64 opacity-30 -z-10 animate-float" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#047857" d="M44.8,-67.2C58.7,-59.2,70.2,-48.2,75.2,-34.9C80.2,-21.6,78.7,-5.9,74.2,8.7C69.7,23.3,62.2,36.8,52.1,47.2C42,57.6,29.3,64.9,15.2,70.2C1.1,75.5,-14.4,78.8,-28.2,74.1C-42,69.4,-54.1,56.7,-62.2,42.2C-70.3,27.7,-74.4,11.4,-73.2,-4.2C-72,-19.8,-65.5,-34.7,-55.6,-44.7C-45.7,-54.7,-32.4,-59.8,-18.2,-65.2C-4,-70.6,10.9,-76.2,24.7,-74.2C38.5,-72.2,51.1,-62.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 relative z-10">
        <ScrollAnimation animation="fade-in-down" delay={0.1}>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg tracking-tight dark:text-emerald-200">Ignite Your Creativity</h1>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in-up" delay={0.3}>
          <p className="text-2xl md:text-3xl text-emerald-900 mb-10 max-w-2xl mx-auto dark:text-emerald-100">
            Maker Labs empowers you to invent, build, and explore through hands-on technology and design.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="scale-in" delay={0.5}>
          <Link
            to="/programs"
            className="inline-block bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-400 text-white px-10 py-4 rounded-full shadow-xl hover:scale-105 font-bold text-xl transition-transform duration-200 animate-bounce dark:from-emerald-900 dark:via-emerald-700 dark:to-emerald-600 dark:text-emerald-100 hover-glow click-ripple"
          >
            Explore Our Programs
          </Link>
        </ScrollAnimation>
      </section>
      {/* Section Divider */}
      <svg className="w-full h-16 md:h-24 -mb-2" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      {/* Key Programs */}
      <section className="bg-white py-16 md:py-24 dark:bg-emerald-900 transition-colors">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-4xl font-bold text-emerald-700 mb-10 text-center dark:text-emerald-200">Featured Programs</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ScrollAnimation animation="slide-in-left" delay={0.1}>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl shadow-xl p-10 flex flex-col items-center hover:scale-105 transition-transform duration-200 dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100 hover-lift">
              <span className="text-emerald-700 text-6xl mb-4 animate-bounce dark:text-emerald-200">🔌</span>
              <h3 className="font-bold text-2xl mb-2">IoT Bootcamps</h3>
              <p className="text-gray-700 text-center dark:text-emerald-100">Learn the basics of Internet of Things with hands-on projects and real devices.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={0.2}>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl shadow-xl p-10 flex flex-col items-center hover:scale-105 transition-transform duration-200 dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100 hover-lift">
              <span className="text-emerald-700 text-6xl mb-4 animate-bounce dark:text-emerald-200">🖨️</span>
              <h3 className="font-bold text-2xl mb-2">3D Printing Workshops</h3>
              <p className="text-gray-700 text-center dark:text-emerald-100">Design, print, and take home your own 3D creations in our guided workshops.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-in-right" delay={0.3}>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl shadow-xl p-10 flex flex-col items-center hover:scale-105 transition-transform duration-200 dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100 hover-lift">
              <span className="text-emerald-700 text-6xl mb-4 animate-bounce dark:text-emerald-200">🤖</span>
              <h3 className="font-bold text-2xl mb-2">Robotics for Beginners</h3>
              <p className="text-gray-700 text-center dark:text-emerald-100">Build and program simple robots—no prior experience required!</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* Section Divider */}
      <svg className="w-full h-16 md:h-24 -mt-2" viewBox="0 0 1440 320"><path fill="#10b981" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,181.3C672,160,768,160,864,186.7C960,213,1056,267,1152,261.3C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      {/* Why Maker Labs */}
      <section className="bg-emerald-50 py-16 md:py-24 dark:bg-emerald-950 transition-colors">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center dark:text-emerald-200">Why Maker Labs?</h2>
        </ScrollAnimation>
        <ul className="list-none space-y-4 text-gray-700 max-w-xl mx-auto text-xl dark:text-emerald-100">
          <ScrollAnimation animation="slide-in-left" delay={0.1}>
            <li className="flex items-center justify-center gap-3 hover-scale">
              <span className="text-emerald-700 text-2xl dark:text-emerald-200 animate-pulse">✨</span> Hands-on, practical learning
            </li>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-in-right" delay={0.2}>
            <li className="flex items-center justify-center gap-3 hover-scale">
              <span className="text-emerald-700 text-2xl dark:text-emerald-200 animate-pulse">🤝</span> Supportive mentors and community
            </li>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-in-left" delay={0.3}>
            <li className="flex items-center justify-center gap-3 hover-scale">
              <span className="text-emerald-700 text-2xl dark:text-emerald-200 animate-pulse">🛠️</span> Access to modern tools and technology
            </li>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-in-right" delay={0.4}>
            <li className="flex items-center justify-center gap-3 hover-scale">
              <span className="text-emerald-700 text-2xl dark:text-emerald-200 animate-pulse">🌍</span> Open to all ages and backgrounds
            </li>
          </ScrollAnimation>
        </ul>
      </section>
      {/* Testimonials & Gallery Row Section */}
      <section className="bg-white py-16 md:py-24 dark:bg-emerald-900 transition-colors">
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-center gap-10">
          {/* Testimonial Card */}
          <ScrollAnimation animation="fade-in-up" delay={0.1}>
            <div className="flex-1 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center md:text-left dark:text-emerald-200">Testimonials</h2>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl shadow-xl p-10 w-full max-w-md flex flex-col items-center dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100 hover-lift">
                <span className="text-emerald-700 text-5xl mb-4 dark:text-emerald-200 animate-wiggle">🗣️</span>
                <p className="text-gray-700 text-lg italic mb-4 text-center dark:text-emerald-100">"Your story could inspire the next generation of makers!"</p>
                <div className="text-gray-500 text-sm mb-2 dark:text-emerald-200">Your Name Here</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Be the first to share your Maker Labs experience.</div>
              </div>
              <div className="text-center mt-6">
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 font-bold text-lg transition-transform duration-200 animate-bounce dark:from-emerald-900 dark:to-emerald-700 dark:text-emerald-100 hover-glow click-ripple"
                >
                  Share Your Story
                </Link>
              </div>
            </div>
          </ScrollAnimation>
          {/* Gallery Card */}
          <ScrollAnimation animation="fade-in-up" delay={0.2}>
            <div className="flex-1 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center md:text-left dark:text-emerald-200">Gallery</h2>
              <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md flex flex-col items-center dark:bg-emerald-950 dark:text-emerald-100 hover-lift">
                <svg className="w-20 h-20 mb-4 animate-float" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="16" fill="#10b981"/>
                  <circle cx="20" cy="26" r="6" fill="#fff"/>
                  <rect x="14" y="38" width="36" height="10" rx="3" fill="#fff"/>
                  <rect x="32" y="18" width="18" height="18" rx="4" fill="#fff"/>
                </svg>
                <p className="text-gray-700 text-lg italic mb-4 text-center dark:text-emerald-100">"We can't wait to showcase projects and events from our community."</p>
                <div className="text-gray-500 text-sm mb-2 dark:text-emerald-200">Gallery Coming Soon</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Help us create the first Maker Labs gallery—join a program or share your project!</div>
              </div>
              <div className="text-center mt-6">
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 font-bold text-lg transition-transform duration-200 animate-bounce dark:from-emerald-900 dark:to-emerald-700 dark:text-emerald-100 hover-glow click-ripple"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* Events Section */}
      <section className="bg-white py-16 md:py-24 dark:bg-emerald-900 transition-colors">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-3xl font-bold text-emerald-700 mb-10 text-center dark:text-emerald-200">Events</h2>
        </ScrollAnimation>
        <div className="flex flex-col items-center justify-center gap-8">
          <ScrollAnimation animation="scale-in" delay={0.2}>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl shadow-xl p-10 max-w-md w-full flex flex-col items-center dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100 hover-lift">
              <svg className="w-20 h-20 mb-4 animate-float" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="16" fill="#10b981"/>
                <rect x="12" y="20" width="40" height="28" rx="6" fill="#fff"/>
                <rect x="20" y="28" width="8" height="8" rx="2" fill="#10b981"/>
                <rect x="36" y="28" width="8" height="8" rx="2" fill="#10b981"/>
              </svg>
              <p className="text-gray-700 text-lg italic mb-4 text-center dark:text-emerald-100">"No events are scheduled yet. Want to help us host the first Maker Labs event?"</p>
              <div className="text-gray-500 text-sm mb-2 dark:text-emerald-200">Events Calendar Coming Soon</div>
              <div className="text-xs text-emerald-700 dark:text-emerald-300">Suggest an event or help us organize the first one!</div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={0.4}>
            <div className="text-center mt-6">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 font-bold text-lg transition-transform duration-200 animate-bounce dark:from-emerald-900 dark:to-emerald-700 dark:text-emerald-100 hover-glow click-ripple"
              >
                Suggest an Event
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-emerald-50 py-16 md:py-24 dark:bg-emerald-950 transition-colors">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-3xl font-bold text-emerald-700 mb-10 text-center flex items-center justify-center gap-3 dark:text-emerald-200">
            <span className="text-emerald-700 text-4xl dark:text-emerald-200 animate-wiggle">❓</span> Frequently Asked Questions
          </h2>
        </ScrollAnimation>
        <div className="max-w-2xl mx-auto space-y-8">
          <ScrollAnimation animation="slide-in-left" delay={0.1}>
            <div className="bg-white rounded-2xl shadow p-6 dark:bg-emerald-900 dark:text-emerald-100 hover-lift">
              <h3 className="font-semibold text-emerald-700 mb-2 dark:text-emerald-200">Who can join Maker Labs?</h3>
              <p className="text-gray-700 dark:text-emerald-100">Anyone! We welcome all ages, backgrounds, and experience levels. If you're curious and want to learn, you belong here.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-in-right" delay={0.2}>
            <div className="bg-white rounded-2xl shadow p-6 dark:bg-emerald-900 dark:text-emerald-100 hover-lift">
              <h3 className="font-semibold text-emerald-700 mb-2 dark:text-emerald-200">Do I need any experience?</h3>
              <p className="text-gray-700 dark:text-emerald-100">No experience is required. Our programs are designed for beginners and experienced makers alike.</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-in-left" delay={0.3}>
            <div className="bg-white rounded-2xl shadow p-6 dark:bg-emerald-900 dark:text-emerald-100 hover-lift">
              <h3 className="font-semibold text-emerald-700 mb-2 dark:text-emerald-200">How can I get involved?</h3>
              <p className="text-gray-700 dark:text-emerald-100">You can join a program, volunteer, partner, or simply reach out to say hi. We'd love to connect!</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-in-right" delay={0.4}>
            <div className="bg-white rounded-2xl shadow p-6 dark:bg-emerald-900 dark:text-emerald-100 hover-lift">
              <h3 className="font-semibold text-emerald-700 mb-2 dark:text-emerald-200">How much does it cost?</h3>
              <p className="text-gray-700 dark:text-emerald-100">Most of our early programs are free or low-cost thanks to community support. Some workshops may have a small materials fee.</p>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animation="fade-in-up" delay={0.5}>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 font-bold text-lg transition-transform duration-200 animate-bounce dark:from-emerald-900 dark:to-emerald-700 dark:text-emerald-100 hover-glow click-ripple"
            >
              Ask a Question
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}

export default Home; 