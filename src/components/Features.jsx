import React from 'react';
import { FaChartLine, FaPlug, FaLifeRing, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: FaChartLine,
    title: 'Analytics',
    desc: 'Realtime inzichten in je data',
  },
  {
    icon: FaPlug,
    title: 'Integraties',
    desc: 'Koppel eenvoudig met je platformen',
  },
  {
    icon: FaLifeRing,
    title: 'Support',
    desc: '24/7 service desk beschikbaar',
  },
  {
    icon: FaUsers,
    title: 'Users',
    desc: 'Rolgebaseerd beheer',
  },
];

function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
        Features
      </h2>
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="p-6 border rounded shadow-sm hover:shadow-md transition-shadow"
          >
            <Icon className="text-secondary text-4xl mb-2" />
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
