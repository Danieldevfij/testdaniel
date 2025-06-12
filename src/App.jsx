import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import DataVisualization from './components/DataVisualization';
import IntegrationsList from './components/IntegrationsList';
import Products from './components/Products';
import CallBanner from './components/CallBanner';
import ContactVacancies from './components/ContactVacancies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <Mission />
        <Services />
        <DataVisualization />
        <IntegrationsList />
        <Products />
        <CallBanner />
        <ContactVacancies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
