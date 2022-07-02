import React, { createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const Navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleLogin = () => {
    console.log({ email, password });
  };

  const handlePushToRegister = () => {
    Navigate('/register', { state: { from: location } });
  };

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
