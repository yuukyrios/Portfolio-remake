import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

import Contact from "./components/contact";

const App: React.FC = () => {
  return (
    <div className="bg-black text-green-400 min-h-screen font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />+
        <Contact />
      </main>
    </div>
  );
};

export default App;
