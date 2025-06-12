import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm text-center p-4" id="contact">
      <p>Europark 24, 4904 SX Oosterhout</p>
      <p>BTW: NL-85.44.97.043.B01</p>
      <p className="space-x-2">
        <a href="#" className="underline">Privacy</a>
        <a href="#" className="underline">Cookies</a>
        <a href="https://www.linkedin.com/company/retailstars" className="underline">LinkedIn</a>
      </p>
    </footer>
  );
}

export default Footer;
