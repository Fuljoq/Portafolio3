import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Footer from './components/Footer/Footer';
import Portafolio from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Portafolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;