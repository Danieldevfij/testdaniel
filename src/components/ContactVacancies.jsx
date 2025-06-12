import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const vacancies = [
  { id: 1, title: 'Frontend Developer', location: 'Remote' },
  { id: 2, title: 'Support Medewerker', location: 'Amsterdam' },
];

function ContactVacancies() {
  const { register, handleSubmit, reset } = useForm();
  const [callBack, setCallBack] = useState(false);
  const [date, setDate] = useState(null);

  const onSubmit = (data) => {
    // TODO: replace with real submit via REST API
    alert(`Bedankt ${data.name}, we nemen contact op!`);
    reset();
    setDate(null);
  };

  return (
    <section id="vacatures" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Contact &amp; Vacatures</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border rounded p-4">
          <input
            type="text"
            placeholder="Naam"
            {...register('name', { required: true })}
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Bericht"
            {...register('message', { required: true })}
            className="w-full border p-2 rounded"
            rows="4"
          />
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="callback" onChange={() => setCallBack(!callBack)} />
            <label htmlFor="callback" className="text-sm">Bel mij terug</label>
          </div>
          {callBack && (
            <DatePicker
              selected={date}
              onChange={setDate}
              showTimeSelect
              dateFormat="Pp"
              className="w-full border p-2 rounded"
              placeholderText="Kies datum en tijd"
            />
          )}
          <button type="submit" className="bg-secondary text-white px-4 py-2 rounded hover:bg-orange-600">Verstuur</button>
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
