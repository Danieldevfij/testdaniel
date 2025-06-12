import React from 'react';
import { FaShoppingCart, FaChartLine, FaPlug } from 'react-icons/fa';

const products = [
  { icon: FaShoppingCart, title: 'Commerce', link: '#' },
  { icon: FaChartLine, title: 'Data & Analytics', link: '#' },
  { icon: FaPlug, title: 'Integrations', link: '#' },
];

function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Producten</h2>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(({ icon: Icon, title, link }) => (
          <div key={title} className="border rounded p-6 bg-white text-center shadow-sm">
            <Icon className="text-secondary text-4xl mb-2 mx-auto" />
            <h3 className="font-medium mb-2">{title}</h3>
            <a href={link} className="text-primary underline text-sm">Lees meer</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
