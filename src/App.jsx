// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import VisionMission from "./components/VisionMission";
import Programs from "./components/Programs";
import WhatWeOffer from "./components/WhatWeOffer";
import Gallery from "./components/Gallery"; // Keep import
import Chatbot from "./components/Chatbot";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-layout min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main" className="flex-1">
        <Hero />
        <About />
        <VisionMission />
        <WhatWeOffer />
        <Programs />
        <Gallery />
        <Contact />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;