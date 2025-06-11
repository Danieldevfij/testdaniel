import React from 'react';

const products = [
  { title: 'Novulo', usps: ['Snel deployen', 'Modulair'], link: '#' },
  { title: 'RDS', usps: ['Realtime data', 'Schaalbaar'], link: '#' },
  { title: 'Channel Engine', usps: ['Marketplace integratie'], link: '#' },
  { title: 'Dovetail', usps: ['Project management'], link: '#' },
  { title: 'Magento', usps: ['Populair e-commerce platform'], link: '#' },
  { title: 'Adyen', usps: ['Betrouwbare payments'], link: '#' },
];

function ProductCards() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
        Producten
      </h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.title} className="border rounded p-4 bg-white shadow-sm">
            <h3 className="font-medium mb-2 text-secondary">{p.title}</h3>
            <ul className="text-sm text-gray-600 mb-2 list-disc list-inside">
              {p.usps.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <a href={p.link} className="text-primary underline text-sm">
              Lees meer
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCards;
