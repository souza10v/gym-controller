// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import CalculatorForm from './components/densidade-copororal/CalculatorForm';
import ResultPage from './components/densidade-copororal/ResultPage';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculo-gordura-corporal" element={<CalculatorForm />} />
        <Route path="/calculo-gordura-corporal/resultado" element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default App;
