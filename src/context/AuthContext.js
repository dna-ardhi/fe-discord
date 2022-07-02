import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateLoginForm } from '../helpers/validator';

const AuthContext = createContext();

export const AuthProvider = ({ children, type }) => {
  const location = useLocation();
  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleLogin = () => {
    console.log('login', { email, password });
  };

  const handlePushToRegister = () => {
    Navigate('/register', { state: { from: location } });
  };

  useEffect(() => {
    if (type === 'login') {
      setIsValid(validateLoginForm({ email, password }));
    } else if (type === 'register') {
    }
  }, [email, password, setIsValid, type]);

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
    handleLogin,
    handlePushToRegister,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
