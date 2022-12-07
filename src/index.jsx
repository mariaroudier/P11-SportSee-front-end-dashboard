import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Sidebar />
    <Dashboard />
    {/* <Routes> */}
      {/* <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/lodgement' element={<Lodgement />} />
      <Route path='/notfound' element={<NotFound />} />
      <Route path='*' element={<NotFound />} /> */}
    {/* </Routes> */}
  </BrowserRouter>,
);
reportWebVitals();
