import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ServicePage from './pages/ServicePage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App; 