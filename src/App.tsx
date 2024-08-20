import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';

const App: React.FC = () => {
  return (
    <Router basename="/chemlab-test-project">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  return <h1>Test</h1>;
};

export { App };
