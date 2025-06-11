import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-100 shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Over</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center text-center p-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welkom bij testdaniel!</h1>
          <p className="text-lg text-gray-600">Je vindt hier alles wat je zoekt.</p>
        </div>
      </main>

      <footer className="bg-gray-100 text-gray-500 text-sm text-center p-2">
        © 2025 testdaniel
      </footer>
    </div>
  );
}

export default HomePage;
