import React from 'react';
import { FaHandsHelping, FaTasks, FaCogs, FaLifeRing, FaChartBar, FaCode } from 'react-icons/fa';

const services = [
  { icon: FaHandsHelping, title: 'Consultancy', link: '#' },
  { icon: FaTasks, title: 'Project management', link: '#' },
  { icon: FaCogs, title: 'Implementation', link: '#' },
  { icon: FaLifeRing, title: 'Support', link: '#' },
  { icon: FaChartBar, title: 'Monitoring', link: '#' },
  { icon: FaCode, title: 'Development', link: '#' },
];

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Diensten</h2>
      {/* TODO: replace with data from headless CMS */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, link }) => (
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

export default Services;
