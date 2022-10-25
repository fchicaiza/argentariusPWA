import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BillingPage from "./pages/BillingPage/BillingPage";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import ConfigurationPage from "./pages/ConfigurationPage/ConfigurationPage";
import ReportPage from "./pages/ReportPage/ReportPage";

function App() {
  let login = true;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/argentarius" element={<HomePage />} />
        <Route path="/facturacion" element={<BillingPage />} />
        <Route path="/productos" element={<ItemPage />} />
        <Route path="/clientes" element={<CustomerPage />} />
        <Route path="/configuracion" element={<ConfigurationPage />} />
        <Route path="/reportes" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
