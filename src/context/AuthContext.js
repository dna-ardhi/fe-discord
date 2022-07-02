import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleLogin = () => {
    console.log({ email, password });
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
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
