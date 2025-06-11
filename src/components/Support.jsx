import React from 'react';

function Support() {
  return (
    <section id="support" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">Service Desk &amp; Support</h2>
      {/* TODO: integrate real ticketing widget */}
      <div className="max-w-xl mx-auto border rounded p-4 text-center">
        <p className="mb-4 text-gray-600">Voor support kun je hier een ticket indienen.</p>
        <button
          onClick={() => alert('Open ticket-widget - vervang door echte integratie')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Nieuw ticket
        </button>
      </div>
    </section>
  );
}

export default Support;
