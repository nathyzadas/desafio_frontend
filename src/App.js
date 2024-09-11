import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastros from './components/Cadastros';
import NovaArea from './components/NovaArea';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Cadastros />} />
          <Route path="/nova-area" element={<NovaArea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
