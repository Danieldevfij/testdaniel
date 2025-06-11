import Hero from './components/Hero';
import DashboardModules from './components/DashboardModules';
import Integrations from './components/Integrations';
import Support from './components/Support';
import UserManagement from './components/UserManagement';
import InfoSection from './components/InfoSection';
import ContactVacancies from './components/ContactVacancies';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <nav className="bg-gray-100 p-4 shadow fixed top-0 left-0 right-0 flex justify-between">
        <div className="text-xl font-bold">Retailstars</div>
        <div className="space-x-4">
          <a href="#hero" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</a>
          <a href="#integraties" className="text-gray-700 hover:text-gray-900">Integraties</a>
          <a href="#support" className="text-gray-700 hover:text-gray-900">Support</a>
          <a href="#users" className="text-gray-700 hover:text-gray-900">Users</a>
          <a href="#info" className="text-gray-700 hover:text-gray-900">Info</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </nav>

      <main className="mt-16">
        <Hero />
        <DashboardModules />
        <Integrations />
        <Support />
        <UserManagement />
        <InfoSection />
        <ContactVacancies />
      </main>

      <footer className="bg-gray-100 text-gray-500 text-sm text-center p-4">
        © 2025 Retailstars
      </footer>
    </div>
  );
}

export default App;
