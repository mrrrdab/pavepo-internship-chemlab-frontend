import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import { CartProvider } from '@/providers';
import {
  HomePage,
  LabEquipmentPage,
  DeliveryPage,
  AboutPage,
  ContactsPage,
  ShoppingCartPage,
  CheckoutPage,
  CosmeceuticalsPage,
  LifeScienceEquipmentPage,
  ConsumablesPage,
  ClinicDiagnosticsPage,
  BiochemistryBiotechnologyPage,
  AnalyticalEquipmentPage,
  MicroelectronicsPage,
  PharmaceuticalsPage,
  ReagentsStandartsPage,
  SpecialOffersPage,
  SuppliersPage,
  VeterinaryPage,
  WarehousePage,
  LabEquipmentProductPage,
} from '@/pages';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router basename="/chemlab-test-project">
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog/analytical-equipment" element={<AnalyticalEquipmentPage />} />
              <Route path="/catalog/biochemistry-biotechnology" element={<BiochemistryBiotechnologyPage />} />
              <Route path="/catalog/clinic-diagnostics" element={<ClinicDiagnosticsPage />} />
              <Route path="/catalog/consumables" element={<ConsumablesPage />} />
              <Route path="/catalog/cosmeceuticals" element={<CosmeceuticalsPage />} />
              <Route path="/catalog/lab-equipment" element={<LabEquipmentPage />} />
              <Route path="/catalog/lab-equipment/:id" element={<LabEquipmentProductPage />} />
              <Route path="/catalog/life-science-equipment" element={<LifeScienceEquipmentPage />} />
              <Route path="/catalog/pharmaceuticals" element={<PharmaceuticalsPage />} />
              <Route path="/catalog/microelectronics" element={<MicroelectronicsPage />} />
              <Route path="/catalog/reagents-standarts" element={<ReagentsStandartsPage />} />
              <Route path="/catalog/special-offers" element={<SpecialOffersPage />} />
              <Route path="/catalog/suppliers" element={<SuppliersPage />} />
              <Route path="/catalog/veterinary" element={<VeterinaryPage />} />
              <Route path="/catalog/warehouse" element={<WarehousePage />} />
              <Route path="/shopping-cart" element={<ShoppingCartPage />} />
              <Route path="/delivery" element={<DeliveryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </CartProvider>
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export { App };
