import React, { useState } from 'react';

const vacancies = [
  { id: 1, title: 'Frontend Developer', location: 'Remote' },
  { id: 2, title: 'Support Medewerker', location: 'Amsterdam' },
];

function ContactVacancies() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real submit via REST API
    alert(`Bedankt ${form.name}, we nemen contact op!`);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">Contact &amp; Vacatures</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4 border rounded p-4">
          <input
            type="text"
            name="name"
            placeholder="Naam"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Bericht"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Verstuur</button>
        </form>
        <div>
          <h3 className="text-xl font-medium mb-4">Vacatures</h3>
          {/* TODO: fetch vacatures from headless CMS */}
          <ul>
            {vacancies.map((v) => (
              <li key={v.id} className="mb-2">
                <strong>{v.title}</strong> - {v.location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactVacancies;
