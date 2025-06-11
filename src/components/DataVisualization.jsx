import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Orders',
      data: [10, 20, 15, 25, 30, 28],
      borderColor: '#F48323',
      backgroundColor: 'rgba(244,131,35,0.4)',
    },
    {
      label: 'Voorraad',
      data: [40, 35, 30, 28, 20, 15],
      borderColor: '#014961',
      backgroundColor: 'rgba(1,73,97,0.4)',
    },
  ],
};

function DataVisualization() {
  return (
    <section id="chart" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
        Realtime orders vs voorraad
      </h2>
      <div className="max-w-3xl mx-auto bg-white p-4 rounded shadow">
        <Line data={data} />
      </div>
    </section>
  );
}

export default DataVisualization;
