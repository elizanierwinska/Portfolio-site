import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
);

