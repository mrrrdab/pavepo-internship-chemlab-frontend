import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import {
  HomePage,
  LabEquipmentPage,
  DeliveryPage,
  AboutPage,
  ContactsPage,
  ShoppingCartPage,
  CheckoutPage,
} from '@pages/.';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router basename="/chemlab-test-project">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog/lab-equipment" element={<LabEquipmentPage />} />
            <Route path="/catalog/lab-equipment/:id" element={<LabEquipmentPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export { App };
