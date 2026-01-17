"use client"
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <section className="px-6 py-0 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 style={{transitionDelay: '100ms'}} className={`text-4xl font-bold text-center mb-6 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Contact Us
        </h1>

        <p style={{transitionDelay: '200ms'}} className={`text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Have questions, feedback, or suggestions? We would love to hear from
          you. Reach out to the Root team and we will get back to you as soon
          as possible.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div style={{transitionDelay: '300ms'}} className={`transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Whether you are facing an issue, have a feature request, or just
              want to share your thoughts, feel free to contact us through the
              details provided.
            </p>

            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> support@root.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +91 98XXX XXX10
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> Mumbai, India
            </p>
          </div>

          {/* Contact Form */}
          <div style={{transitionDelay: '400ms'}} className={`transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-100 bg-opacity-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-100 bg-opacity-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-gray-100 bg-opacity-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
              ></textarea>

              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transform hover:scale-105 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Support Note */}
        <div style={{transitionDelay: '500ms'}} className={`mb-14 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-semibold mb-1">Support & Feedback</h2>
          <p className="text-gray-600 mb-3">
            We value user feedback and use it to continuously improve Root.
            Your suggestions help us enhance usability, discoverability, and
            overall experience.
          </p>
          <p className="text-gray-600">
            If you encounter any broken profiles or unexpected behavior, please
            report it so we can fix it quickly.
          </p>
        </div>

        {/* Footer */}
        <div style={{transitionDelay: '600ms'}} className={`border-t pt-1 text-center text-gray-500 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          © {new Date().getFullYear()} Root. We are always here to help.
        </div>
      </div>
    </section>
  );
}
