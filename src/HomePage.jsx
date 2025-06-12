import React, { useState } from 'react';

function HomePage() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <nav className="fixed top-0 inset-x-0 bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
          <div className="text-2xl font-bold">RetailStars</div>
          <button
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggle}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="uppercase text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">Home</a>
            <a href="#" className="uppercase text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">Features</a>
            <a href="#" className="uppercase text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">Pricing</a>
            <a href="#" className="uppercase text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a>
          </div>
        </div>
        <div className={`${open ? 'block' : 'hidden'} md:hidden bg-white shadow-sm`}>
          <div className="flex flex-col items-center space-y-2 pb-4 pt-2">
            <a href="#" className="uppercase text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setOpen(false)}>Home</a>
            <a href="#" className="uppercase text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setOpen(false)}>Features</a>
            <a href="#" className="uppercase text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#" className="uppercase text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 to-blue-500 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">Empower Your Business</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">Modern solutions to grow and scale effortlessly.</p>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-white/50">Get Started</button>
          <button className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition focus:outline-none focus:ring-4 focus:ring-white/50">Learn More</button>
        </div>
      </section>
      <section className="bg-white py-20 px-4" id="mission">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Mission</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">Driving progress through cutting-edge technology.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
            <p className="text-gray-600">Delivering consistent quality and performance.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
            <p className="text-gray-600">Partnering with you every step of the way.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16" id="services">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow hover:-translate-y-1 hover:shadow-lg transition">
            <div className="w-10 h-10 mb-4 text-blue-500"></div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Analytics</h3>
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow hover:-translate-y-1 hover:shadow-lg transition">
            <div className="w-10 h-10 mb-4 text-blue-500"></div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Automation</h3>
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow hover:-translate-y-1 hover:shadow-lg transition">
            <div className="w-10 h-10 mb-4 text-blue-500"></div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Collaboration</h3>
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow hover:-translate-y-1 hover:shadow-lg transition">
            <div className="w-10 h-10 mb-4 text-blue-500"></div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Security</h3>
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </div>
        </div>
      </section>
      <section className="bg-white py-16" id="integrations">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Integrations</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
            <div className="w-8 h-8 mb-2"></div>
            <span className="text-sm text-gray-700">API</span>
          </div>
          <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
            <div className="w-8 h-8 mb-2"></div>
            <span className="text-sm text-gray-700">CRM</span>
          </div>
          <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
            <div className="w-8 h-8 mb-2"></div>
            <span className="text-sm text-gray-700">Payments</span>
          </div>
          <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
            <div className="w-8 h-8 mb-2"></div>
            <span className="text-sm text-gray-700">Storage</span>
          </div>
          <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
            <div className="w-8 h-8 mb-2"></div>
            <span className="text-sm text-gray-700">Analytics</span>
          </div>
          <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
            <div className="w-8 h-8 mb-2"></div>
            <span className="text-sm text-gray-700">Marketing</span>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to transform your business?</h2>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow hover:shadow-md transition focus:ring-4 focus:ring-white/50 focus:outline-none">Join Now</button>
      </section>
      <footer className="bg-blue-900 text-blue-200 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>123 Market St.</p>
            <p>+1 (555) 000-0000</p>
            <p>info@retailstars.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Privacy</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <div className="flex space-x-4">
              <div className="w-6 h-6 bg-blue-800 rounded"></div>
              <div className="w-6 h-6 bg-blue-800 rounded"></div>
              <div className="w-6 h-6 bg-blue-800 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-blue-800 text-center text-sm py-4 mt-8">© 2025 RetailStars. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default HomePage;
