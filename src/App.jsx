
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip'; // Assuming you might need tooltips later

const App = () => {
  return (
    <Router>
      <TooltipProvider> {/* Provider for potential future tooltip usage */}
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </MainLayout>
        <Toaster />
      </TooltipProvider>
    </Router>
  );
};

export default App;
