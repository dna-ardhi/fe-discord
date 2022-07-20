import { Typography } from '@mui/material';
import React from 'react';
import AuthBox from '../../../components/AuthBox';
import { AuthProvider } from '../../../context/AuthContext';
import Footer from './Footer';
import InputForm from './InputForm';

const Register = () => {
  return (
    <AuthProvider type='register'>
      <AuthBox>
        <Typography variant='h5' sx={{ color: 'white' }}>
          Create an account
        </Typography>
        <InputForm />
        <Footer />
      </AuthBox>
    </AuthProvider>
  );
};

export default Register;
