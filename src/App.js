import React from 'react';
import './App.css';
import ConsultantList from './components/ConsultantList';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/konsultit" element={<ConsultantList />} />
          <Route path="/haku" element={<div>Hakutoiminto tulee tähän</div>} />
          <Route path="/raportit" element={<div>Raportit tulevat tähän</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
