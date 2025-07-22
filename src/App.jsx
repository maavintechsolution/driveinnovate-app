import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import DealerDashboard from './DealerDashboard';
import ClientDashboard from './ClientDashboard';
import TeamDashboard from './TeamDashboard';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dealer" element={<DealerDashboard />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/team" element={<TeamDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
