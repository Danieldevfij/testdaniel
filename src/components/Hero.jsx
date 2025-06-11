import React from 'react';

function Hero() {
  return (
    <section id="hero" className="bg-gray-50 pt-20 pb-32 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">Retailstars Dashboard</h1>
      <p className="max-w-xl mx-auto text-gray-700 mb-6">
        One platform voor omnichannel inzichten, integratiebeheer en service management.
      </p>
      {/* TODO: replace alert with actual demo booking hook */}
      <button
        onClick={() => alert('Plan een demo - koppel je eigen handler')}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Plan een demo
      </button>
    </section>
  );
}

export default Hero;
