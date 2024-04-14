import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ExecutorPage from './pages/ExecutorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/executor" element={<ExecutorPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;