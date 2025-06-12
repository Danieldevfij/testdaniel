import React from 'react';
import { FaPlug } from 'react-icons/fa';

// TODO: replace with fetch to integrations API
const integrations = [
  'Adyen','AfterPay','Akineo','Alipay','Asperion','AuroraCommerce','BazaarVoice','BeautySuccess','BusinessCentral','CCV','Centric','ChainBalance','ChannelEngine','DieboldNixdorf','EcoVoucher','Eloqua','EuroPass','Experian','FashionCheque','GoogleAnalytics','Ingenico','Itim','Logistex','Magento','Mendix','NCR','NiceLabel','Nshift','Responsys','Salesforce','SAP','ScanCoin','SharePoint','SQLServer','Talend','TCS','TrustPilot','Tyro','WeChat','WorldLine'
];

function IntegrationsList() {
  return (
    <section id="integraties" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Integraties</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {integrations.map((name) => (
          <div key={name} className="border rounded p-4 flex flex-col items-center bg-gray-50">
            <FaPlug className="text-secondary mb-2" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IntegrationsList;
