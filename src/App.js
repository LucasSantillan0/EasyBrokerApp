import './App.css';
import Propieties from './components/propieties';
import { useState, useEffect } from 'react';

function App() {


  return (
    <div className="App">
      <nav>
        <h1>EasyBroker app</h1>
        <h2>Lucas Santillán</h2>
      </nav>
      <Propieties/>
    </div>
  );
}

export default App;
