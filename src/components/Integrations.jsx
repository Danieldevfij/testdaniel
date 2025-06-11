import React, { useEffect, useState } from 'react';

function Integrations() {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    // TODO: replace with real API call to integration service
    setPlatforms([
      { name: 'Magento', status: 'ok' },
      { name: 'Shopify', status: 'warning' },
      { name: 'ERP-systeem', status: 'ok' },
    ]);
  }, []);

  return (
    <section id="integraties" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">Integratiebeheer</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-4">
        {platforms.map((p) => (
          <div key={p.name} className="border rounded p-4 text-center">
            <h3 className="font-medium mb-2">{p.name}</h3>
            <p className={`text-sm ${p.status === 'ok' ? 'text-green-600' : 'text-yellow-600'}`}>Status: {p.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Integrations;
