import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/sections/Home/home';
import About from './components/sections/About/about';
import Projects from './components/sections/Projects/projects';
import Support from './components/sections/Support/support';
import Contact from './components/sections/Contact/contact';
import News from './components/sections/News/news';
import './index.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
