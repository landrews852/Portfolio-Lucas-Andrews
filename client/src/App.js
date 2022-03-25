import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/landing_page/landingPage';

function App() {
  return (
  <>
    <Router>
      <div className="App">
        <Routes>
          <Route  path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
