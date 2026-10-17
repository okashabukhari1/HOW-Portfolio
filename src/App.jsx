import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader_004 from './components/v1/skiper10';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PlansPage from './pages/PlansPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <BrowserRouter>
      {/* Skiper10 Double Stairs Preloader Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader_004 key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <ScrollToTop />
      <div className="studio-app-root">
        {/* Persistent Responsive Multi-Page Navigation */}
        <Navbar />

        {/* Multi-Page Route Views */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:projectId" element={<ProjectDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
