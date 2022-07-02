import { Button } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };
  return (
    <>
      <div>Dashboard</div>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Dashboard;
