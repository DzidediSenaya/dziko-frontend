import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/sections/Home/home';
import About from './components/sections/About/about';
import Projects from './components/sections/Projects/projects';
import Support from './components/sections/Support/support';
import Contact from './components/sections/Contact/contact';
import News from './components/sections/News/news';
import './index.css'
import Admin from './components/sections/Admin/admin';
import Welcome from './components/sections/Admin/auth';
import Login from './components/sections/Admin/login';
import ProjectList from './components/sections/Admin/projectlist';

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
          <Route path="/sage" element={<Admin />} />
          <Route path="/sage/:userId" element={<Welcome />} />
          <Route path="/saige" element={<Login />} />
          <Route path="/allprojects" element={<ProjectList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
