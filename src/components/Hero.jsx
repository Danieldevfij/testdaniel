import React from 'react';

function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-40 text-center bg-gradient-to-br from-primary to-secondary text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Boost je retailprestaties met Retailstars
      </h1>
      <p className="max-w-xl mx-auto mb-6">
        Data-gedreven marketing & voorraadoptimalisatie in één platform.
      </p>
      <div className="space-x-4">
        {/* TODO: replace alert with actual demo booking hook */}
        <button
          onClick={() => alert('Plan een gratis demo')}
          className="bg-secondary text-white px-6 py-3 rounded hover:bg-orange-600"
        >
          Plan een gratis demo
        </button>
        <a
          href="#features"
          className="border border-white px-6 py-3 rounded hover:bg-white hover:text-primary"
        >
          Bekijk features
        </a>
      </div>
    </section>
  );
}

export default Hero;
