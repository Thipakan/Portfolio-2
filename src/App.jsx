import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Competences from "./components/Competences";

// Pages projets individuelles
import Docker from "./pages/Docker";
import Haproxy from "./pages/Haproxy";
import Wazuh from "./pages/Wazuh";
import PacketTracer from "./pages/PacketTracer";
import Kasa from "./pages/Kasa";
import Kanap from "./pages/Kanap";
import Mediatek from "./pages/Mediatek";
import "./App.css";





export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de 3 secondes
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Presentation />
            <Portfolio />
            <Competences />
            <Contact />
          </>
        } />
        <Route path="/docker" element={<Docker />} />
        <Route path="/haproxy" element={<Haproxy />} />
        <Route path="/wazuh" element={<Wazuh />} />
        <Route path="/packet-tracer" element={<PacketTracer />} />
        <Route path="/kasa" element={<Kasa />} />
        <Route path="/kanap" element={<Kanap />} />
        <Route path="/mediatek" element={<Mediatek />} />
      </Routes>
    </Router>
  );
}
