import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modules = [
  {
    title: 'Dashboard',
    content: 'Overzicht van alle prestaties in één oogopslag.',
  },
  {
    title: 'Integraties',
    content: 'Koppelingen met toonaangevende platformen.',
  },
  {
    title: 'Support',
    content: 'Directe toegang tot onze servicedesk.',
  },
  {
    title: 'User Management',
    content: 'Beheer van rollen en rechten.',
  },
];

function ModulesAccordion() {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section id="modules" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
        Modules
      </h2>
      <div className="max-w-3xl mx-auto">
        {modules.map((m, idx) => (
          <div key={m.title} className="border-b">
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-4 flex justify-between items-center"
            >
              <span>{m.title}</span>
              <span>{open === idx ? '-' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {open === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden px-4 pb-4 text-gray-600"
                >
                  {m.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ModulesAccordion;
