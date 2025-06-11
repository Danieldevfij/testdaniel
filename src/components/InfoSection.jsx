import React from 'react';

const services = [
  { icon: '📈', title: 'Analytics', usp: 'Realtime inzichten' },
  { icon: '🔗', title: 'Integraties', usp: 'Koppeling met alle platformen' },
  { icon: '🛠️', title: 'Support', usp: '24/7 Service desk' },
];

function InfoSection() {
  return (
    <section id="info" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">Diensten &amp; Producten</h2>
      {/* TODO: fetch services from headless CMS */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="border rounded p-4 text-center">
            <div className="text-5xl mb-2" aria-hidden>{s.icon}</div>
            <h3 className="font-medium mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.usp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoSection;
