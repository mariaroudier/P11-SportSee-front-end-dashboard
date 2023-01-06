import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';



<script src="http://localhost:8097"></script>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Sidebar />
    <main>
      <Dashboard />
    </main>
  </BrowserRouter>,
);
reportWebVitals();
