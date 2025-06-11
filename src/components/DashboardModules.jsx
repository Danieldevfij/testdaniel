import React, { useEffect, useState } from 'react';

function DashboardModules() {
  const [analytics, setAnalytics] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // TODO: fetch real analytics via REST API
    setAnalytics({ visitors: 1234, sales: 99 });
    // TODO: connect to project status via WebSocket
    setStatus('Op schema');
  }, []);

  return (
    <section id="dashboard" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">Dashboard Modules</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <h3 className="text-xl font-medium mb-2">Omnichannel analytics</h3>
          <p className="text-gray-600">Bezoekers: {analytics?.visitors}</p>
          <p className="text-gray-600">Orders: {analytics?.sales}</p>
        </div>
        <div className="border rounded p-4">
          <h3 className="text-xl font-medium mb-2">Projectstatus</h3>
          <p className="text-gray-600">Status: {status}</p>
        </div>
      </div>
    </section>
  );
}

export default DashboardModules;
