import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateLoginForm, validateRegisterForm } from '../helpers/validator';

const AuthContext = createContext();

export const AuthProvider = ({ children, type }) => {
  const location = useLocation();
  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);

  const resetState = () => {
    setEmail('');
    setPassword('');
    setUsername('');
  };

  const handleLogin = () => {
    console.log('login', { email, password });
    resetState();
  };

  const handleRegister = () => {
    console.log('register', { email, username, password });
    resetState();
  };

  const handlePushToRegister = () => {
    Navigate('/register', { state: { from: location } });
  };

  const handlePushToLogin = () => {
    Navigate('/login', { state: { from: location } });
  };

  useEffect(() => {
    if (type === 'login') {
      setIsValid(validateLoginForm({ email, password }));
    } else if (type === 'register') {
      setIsValid(validateRegisterForm({ username, email, password }));
    }
  }, [username, email, password, setIsValid, type]);

  const contextValue = {
    // getter
    email,
    password,
    username,
    isValid,
    // Setter
    setEmail,
    setPassword,
    setUsername,
    setIsValid,
    // Handler
    handleRegister,
    handleLogin,
    handlePushToRegister,
    handlePushToLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
