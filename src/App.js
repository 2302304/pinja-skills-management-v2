import React from 'react';
import './App.css';
import ConsultantList from './components/ConsultantList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pinja Osaamisenhallinnan Ohjelmisto</h1>
      </header>
      <ConsultantList />
    </div>
  );
}

export default App;
