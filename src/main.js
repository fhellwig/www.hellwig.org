import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Career } from './career.js';
import { Publications } from './publications.js';

export function Main({ onThemeChange }) {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Career />} />
          <Route path="/pubs" element={<Publications />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
