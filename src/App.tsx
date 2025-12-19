import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartUpdate, setCartUpdate] = useState(0);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'InnovativeJax - Innovative Education Solutions',
      about: 'About Us - InnovativeJax',
      services: 'Services - InnovativeJax',
      projects: 'Projects - InnovativeJax',
      clients: 'Our Clients - InnovativeJax',
      shop: 'Shop - InnovativeJax',
      careers: 'Careers - InnovativeJax',
      contact: 'Contact Us - InnovativeJax',
    };

    document.title = pageTitles[currentPage] || 'InnovativeJax';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects />;
      case 'clients':
        return <Clients />;
      case 'shop':
        return <Shop onAddToCart={() => setCartUpdate(cartUpdate + 1)} />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onCartUpdate={() => setCartUpdate(cartUpdate + 1)}
      />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <Chatbot />
      <BackToTop />
    </div>
  );
}

export default App;
