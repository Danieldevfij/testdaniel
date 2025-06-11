import Hero from './components/Hero';
import Features from './components/Features';
import DataVisualization from './components/DataVisualization';
import UseCaseBanner from './components/UseCaseBanner';
import ModulesAccordion from './components/ModulesAccordion';
import ProductCards from './components/ProductCards';
import ContactVacancies from './components/ContactVacancies';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <nav className="bg-white/80 backdrop-blur p-4 shadow fixed top-0 left-0 right-0 flex justify-between z-10">
        <div className="text-xl font-bold text-primary">Retailstars</div>
        <div className="space-x-4 hidden md:block">
          <a href="#hero" className="text-primary hover:underline">Home</a>
          <a href="#features" className="text-primary hover:underline">Features</a>
          <a href="#usecase" className="text-primary hover:underline">Use Case</a>
          <a href="#modules" className="text-primary hover:underline">Modules</a>
          <a href="#products" className="text-primary hover:underline">Producten</a>
          <a href="#contact" className="text-primary hover:underline">Contact</a>
        </div>
        {/* Simple dark mode toggle */}
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="ml-4 text-primary border rounded px-2 py-1"
        >
          Toggle
        </button>
      </nav>

      <main className="mt-16">
        <Hero />
        <Features />
        <DataVisualization />
        <UseCaseBanner />
        <ModulesAccordion />
        <ProductCards />
        <ContactVacancies />
      </main>

      <footer className="bg-gray-100 text-gray-500 text-sm text-center p-4">
        <p>Europark 24, 4904 SX Oosterhout</p>
        <p>+31 (0)85 744 1415 · info@retailstars.nl · KvK 61807893</p>
      </footer>
    </div>
  );
}

export default App;
