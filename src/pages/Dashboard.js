import { Button } from '@mui/material';
import React from 'react';
import { logout } from '../helpers/auth';

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};

export default Dashboard;
