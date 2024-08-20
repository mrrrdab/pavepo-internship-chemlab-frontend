import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import { HomePage, ContactsPage } from '@pages/.';

const App: React.FC = () => {
  return (
    <Router basename="/chemlab-test-project">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router>
  );
};

export { App };
