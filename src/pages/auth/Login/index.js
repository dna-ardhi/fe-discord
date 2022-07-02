import React from 'react';
import AuthBox from '../../../components/AuthBox';
import { AuthProvider } from '../../../context/AuthContext';
import Footer from './Footer';
import Header from './Header';
import InputForm from './InputForm';

const Login = () => {
  return (
    <AuthProvider type='login'>
      <AuthBox>
        <Header />
        <InputForm />
        <Footer />
      </AuthBox>
    </AuthProvider>
  );
};

export default Login;
