"use client"
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <section className="px-6 py-0 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 style={{transitionDelay: '100ms'}} className={`text-4xl font-bold text-center mb-6 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          About Root
        </h1>

        <p style={{transitionDelay: '200ms'}} className={`text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Root is a public profile platform that lets you collect and share all
          your important links in one place. Built with openness in mind, Root
          allows anyone to create a searchable profile without logging in or
          creating an account.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div style={{transitionDelay: '300ms'}} className={`transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Our mission is to make online identity simple and accessible.
              Root removes barriers like sign-ups and logins, allowing anyone
              to create a public link profile instantly and share it freely.
            </p>
          </div>

          <div style={{transitionDelay: '400ms'}} className={`transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              We envision an open web where profiles are easy to discover and
              links are effortless to access. Root aims to be a trusted public
              directory for personal links, portfolios, and online presence.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-14">
          <h2 style={{transitionDelay: '500ms'}} className={`text-2xl font-semibold mb-6 text-center transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            What Root Offers
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Public Profiles', description: 'Create a public profile that anyone can view and search.' },
              { title: 'No Login Required', description: 'Build and share your Root without signing up or logging in.' },
              { title: 'Searchable Discovery', description: 'Profiles are openly discoverable and easy to find.' },
              { title: 'Clean Interface', description: 'A minimal, distraction-free layout focused on clarity.' },
              { title: 'Fast & Lightweight', description: 'Optimized for speed and quick access on any device.' },
              { title: 'Open by Design', description: 'Built around openness, accessibility, and ease of sharing.' },
            ].map((feature, index) => (
              <div
                key={feature.title}
                style={{ transitionDelay: `${40 + index * 10}ms` }}
                className={`p-5 bg-white rounded-xl shadow-sm transform hover:scale-105 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who it's for */}
        <div style={{transitionDelay: '500ms'}} className={`mb-14 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-semibold mb-1">Who Is Root For?</h2>
          <p className="text-gray-600 mb-3">
            Root is for anyone who wants a simple public presence online.
            Creators, students, developers, professionals, and individuals can
            use Root to share links, portfolios, and profiles openly.
          </p>
        </div>

        {/* Footer */}
        <div style={{transitionDelay: '1300ms'}} className={`border-t pt-1 text-center text-gray-500 transition-all duration-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          © {new Date().getFullYear()} Root. Built for an open web.
        </div>
      </div>
    </section>
  );
}
