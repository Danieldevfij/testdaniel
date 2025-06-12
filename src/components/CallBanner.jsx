import React from 'react';
import { FaPhone } from 'react-icons/fa';

function CallBanner() {
  return (
    <section className="bg-secondary text-white py-12 text-center" id="contact">
      <h2 className="text-2xl font-semibold mb-4">Direct contact?</h2>
      <button
        onClick={() => alert('We bellen u zo snel mogelijk terug')}
        className="bg-white text-secondary px-6 py-3 rounded font-medium mb-4"
      >
        Bel mij
      </button>
      <p>+31 (0)85 744 1415 | +44 330 808 1832 | info@retailstars.nl</p>
    </section>
  );
}

export default CallBanner;
