import React from "react";

function About() {
  return (
    <div className="relative overflow-hidden dark:bg-emerald-950 transition-colors">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 rounded-2xl shadow-xl mb-12 relative overflow-hidden dark:from-emerald-900 dark:via-emerald-950 dark:to-emerald-900">
        <svg className="absolute left-0 top-0 w-40 h-40 opacity-20 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#10b981" d="M44.8,-67.2C58.7,-59.2,70.2,-48.2,75.2,-34.9C80.2,-21.6,78.7,-5.9,74.2,8.7C69.7,23.3,62.2,36.8,52.1,47.2C42,57.6,29.3,64.9,15.2,70.2C1.1,75.5,-14.4,78.8,-28.2,74.1C-42,69.4,-54.1,56.7,-62.2,42.2C-70.3,27.7,-74.4,11.4,-73.2,-4.2C-72,-19.8,-65.5,-34.7,-55.6,-44.7C-45.7,-54.7,-32.4,-59.8,-18.2,-65.2C-4,-70.6,10.9,-76.2,24.7,-74.2C38.5,-72.2,51.1,-62.2,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-700 drop-shadow-lg tracking-tight animate-fade-in dark:text-emerald-200">About Maker Labs</h1>
        <p className="text-xl md:text-2xl text-emerald-900 mb-8 max-w-2xl mx-auto animate-fade-in-slow dark:text-emerald-100">
          Maker Labs is a brand new initiative dedicated to sparking creativity, curiosity, and hands-on learning in technology, engineering, and design.
        </p>
      </section>
      {/* Section Divider */}
      <svg className="w-full h-16 md:h-24 -mb-2" viewBox="0 0 1440 320"><path fill="#10b981" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      {/* How We Work */}
      <section className="py-16 md:py-24 bg-white dark:bg-emerald-900 transition-colors">
        <h2 className="text-3xl font-bold text-emerald-700 mb-10 text-center dark:text-emerald-200">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl p-10 flex flex-col items-center animate-fade-in-slow dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100">
            <span className="text-emerald-700 text-5xl mb-4 dark:text-emerald-200">👐</span>
            <h3 className="font-bold text-xl mb-2 text-emerald-800 dark:text-emerald-200">Open to All</h3>
            <p className="text-gray-700 text-center dark:text-emerald-100">Anyone can join—no experience needed. We welcome all ages, backgrounds, and skill levels.</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl p-10 flex flex-col items-center animate-fade-in dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100">
            <span className="text-emerald-700 text-5xl mb-4 dark:text-emerald-200">🛠️</span>
            <h3 className="font-bold text-xl mb-2 text-emerald-800 dark:text-emerald-200">Hands-On Learning</h3>
            <p className="text-gray-700 text-center dark:text-emerald-100">We believe in learning by doing—every program is practical, creative, and fun.</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl p-10 flex flex-col items-center animate-fade-in-slow dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100">
            <span className="text-emerald-700 text-5xl mb-4 dark:text-emerald-200">🤝</span>
            <h3 className="font-bold text-xl mb-2 text-emerald-800 dark:text-emerald-200">Community First</h3>
            <p className="text-gray-700 text-center dark:text-emerald-100">We’re building a supportive, inspiring community of makers, mentors, and learners.</p>
          </div>
        </div>
      </section>
      {/* Section Divider */}
      <svg className="w-full h-16 md:h-24 -mt-2" viewBox="0 0 1440 320"><path fill="#10b981" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,181.3C672,160,768,160,864,186.7C960,213,1056,267,1152,261.3C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      {/* Call to Action */}
      <section className="text-center py-12 bg-emerald-50 dark:bg-emerald-950 transition-colors">
        <h2 className="text-3xl font-bold text-emerald-700 mb-4 dark:text-emerald-200">Join Us On This Journey</h2>
        <p className="text-lg text-gray-700 mb-6 dark:text-emerald-100">We’re just getting started and would love for you to be part of our story. Whether you want to learn, teach, volunteer, or partner—reach out and help us build something amazing together!</p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-10 py-4 rounded-full shadow-xl hover:scale-105 font-bold text-xl transition-transform duration-200 animate-bounce dark:from-emerald-900 dark:to-emerald-700 dark:text-emerald-100"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}

export default About; 