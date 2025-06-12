import React from 'react';

function Mission() {
  return (
    <section id="mission" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6 text-primary">Onze missie</h2>
      <p className="max-w-3xl mx-auto text-center mb-4">
        Het vergroten van activiteit op al uw verkoopkanalen, op ieder moment en vanuit elke locatie waardoor u extra verkoopkansen creëert en deze maximaal kunt benutten.
      </p>
      <ul className="max-w-xl mx-auto list-disc list-inside space-y-2 text-gray-700">
        <li>Laat online en offline grenzen verdwijnen door omnichannel-services.</li>
        <li>Verbeter uw dienstverlening door winkelmedewerkers te ondersteunen met digitale oplossingen.</li>
        <li>Verkrijg betrouwbare voorraadinzichten vanuit iedere locatie.</li>
        <li>Adopteer flexibele technologie om snel in te spelen op veranderingen.</li>
      </ul>
    </section>
  );
}

export default Mission;
