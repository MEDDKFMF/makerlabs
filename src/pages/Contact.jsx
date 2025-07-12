import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    console.log("Contact form submitted:", form);
  }

  const socials = [
    {
      name: "WhatsApp",
      href: "https://wa.me/1234567890",
      color: "bg-green-500",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.68.97.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourhandle",
      color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
      )
    },
    {
      name: "Telegram",
      href: "https://t.me/yourhandle",
      color: "bg-blue-400",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.94 7.44l-1.5 7.07c-.11.49-.4.61-.81.38l-2.25-1.66-1.09 1.05c-.12.12-.23.23-.47.23l.17-2.39 4.36-3.94c.19-.17-.04-.27-.29-.1l-5.39 3.39-2.32-.73c-.5-.16-.51-.5.1-.73l9.06-3.5c.42-.16.8.1.66.7z"/></svg>
      )
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourhandle",
      color: "bg-blue-500",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 0 1 .964 9.1v.062a4.927 4.927 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.084 4.936 4.936 0 0 0 4.604 3.419A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
      )
    }
  ];

  if (submitted) {
    return (
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-24 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 rounded-2xl shadow-xl mb-12 relative overflow-hidden">
          <svg className="absolute left-0 top-0 w-40 h-40 opacity-20 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#10b981" d="M44.8,-67.2C58.7,-59.2,70.2,-48.2,75.2,-34.9C80.2,-21.6,78.7,-5.9,74.2,8.7C69.7,23.3,62.2,36.8,52.1,47.2C42,57.6,29.3,64.9,15.2,70.2C1.1,75.5,-14.4,78.8,-28.2,74.1C-42,69.4,-54.1,56.7,-62.2,42.2C-70.3,27.7,-74.4,11.4,-73.2,-4.2C-72,-19.8,-65.5,-34.7,-55.6,-44.7C-45.7,-54.7,-32.4,-59.8,-18.2,-65.2C-4,-70.6,10.9,-76.2,24.7,-74.2C38.5,-72.2,51.1,-62.2,44.8,-67.2Z" transform="translate(100 100)" />
          </svg>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-700 drop-shadow-lg tracking-tight animate-fade-in">Thank You!</h2>
          <p className="text-xl md:text-2xl text-emerald-900 mb-8 max-w-2xl mx-auto animate-fade-in-slow">Your message has been received. We'll get back to you soon.</p>
          <button
            className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 font-bold text-xl transition-transform duration-200 animate-bounce"
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
          >
            Send Another Message
          </button>
        </section>
        {/* Chat With Us Section */}
        <section className="text-center py-12 bg-emerald-50">
          <h3 className="text-2xl font-bold text-emerald-700 mb-4">Or chat with us on:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${s.color} text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform`}
              >
                {s.icon} {s.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden dark:bg-emerald-950 transition-colors">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 rounded-2xl shadow-xl mb-12 relative overflow-hidden dark:from-emerald-900 dark:via-emerald-950 dark:to-emerald-900">
        <svg className="absolute right-0 top-0 w-40 h-40 opacity-20 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#10b981" d="M44.8,-67.2C58.7,-59.2,70.2,-48.2,75.2,-34.9C80.2,-21.6,78.7,-5.9,74.2,8.7C69.7,23.3,62.2,36.8,52.1,47.2C42,57.6,29.3,64.9,15.2,70.2C1.1,75.5,-14.4,78.8,-28.2,74.1C-42,69.4,-54.1,56.7,-62.2,42.2C-70.3,27.7,-74.4,11.4,-73.2,-4.2C-72,-19.8,-65.5,-34.7,-55.6,-44.7C-45.7,-54.7,-32.4,-59.8,-18.2,-65.2C-4,-70.6,10.9,-76.2,24.7,-74.2C38.5,-72.2,51.1,-62.2,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-700 drop-shadow-lg tracking-tight animate-fade-in dark:text-emerald-200">Contact Us</h2>
        <p className="text-xl md:text-2xl text-emerald-900 mb-8 max-w-2xl mx-auto animate-fade-in-slow dark:text-emerald-100">We'd love to hear from you! Fill out the form below and we'll get in touch.</p>
      </section>
      {/* Section Divider */}
      <svg className="w-full h-16 md:h-24 -mb-2" viewBox="0 0 1440 320"><path fill="#10b981" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-white dark:bg-emerald-900 transition-colors">
        <form className="max-w-xl mx-auto bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl p-10 space-y-8 animate-fade-in-slow dark:from-emerald-800 dark:to-emerald-900 dark:text-emerald-100" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-2 dark:text-emerald-200"><span className="text-emerald-700 text-xl dark:text-emerald-200">👤</span> Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-100"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-2 dark:text-emerald-200"><span className="text-emerald-700 text-xl dark:text-emerald-200">✉️</span> Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-100"
              placeholder="your@email.com"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-2 dark:text-emerald-200"><span className="text-emerald-700 text-xl dark:text-emerald-200">💬</span> Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-700 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-100"
              rows={4}
              placeholder="Your message"
            />
          </div>
          {error && <div className="text-red-600 text-sm dark:text-red-400">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-3 rounded-full font-bold text-lg shadow-lg hover:from-emerald-800 hover:to-emerald-600 transition dark:from-emerald-900 dark:to-emerald-700 dark:text-emerald-100"
          >
            Send Message
          </button>
        </form>
      </section>
      {/* Chat With Us Section */}
      <section className="text-center py-12 bg-emerald-50 dark:bg-emerald-950 transition-colors">
        <h3 className="text-2xl font-bold text-emerald-700 mb-4 dark:text-emerald-200">Or chat with us on:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${s.color} text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform`}
            >
              {s.icon} {s.name}
            </a>
          ))}
        </div>
      </section>
      {/* Section Divider */}
      <svg className="w-full h-16 md:h-24 -mt-2" viewBox="0 0 1440 320"><path fill="#10b981" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,181.3C672,160,768,160,864,186.7C960,213,1056,267,1152,261.3C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      {/* Encouragement */}
      <section className="text-center py-12 bg-emerald-50 dark:bg-emerald-950 transition-colors">
        <h2 className="text-3xl font-bold text-emerald-700 mb-4 dark:text-emerald-200">We Can’t Wait to Hear From You!</h2>
        <p className="text-lg text-gray-700 mb-6 dark:text-emerald-100">Whether you have a question, want to join a program, or just want to say hi—reach out and let’s make something amazing together!</p>
      </section>
    </div>
  );
}

export default Contact; 