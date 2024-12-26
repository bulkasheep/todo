import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { App, TaskPage } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/todo/'>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/:id" element={<TaskPage />} />
        <Route path="/*" element={<p>Пустота...</p>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
