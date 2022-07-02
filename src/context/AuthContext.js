import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateLoginForm, validateRegisterForm } from '../helpers/validator';
import { getActions } from '../store/actions/authAction';
import { useDispatch } from 'react-redux';

const AuthContext = createContext();

export const AuthProvider = ({ children, type }) => {
  const location = useLocation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { login, register } = getActions(dispatch);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleLogin = () => {
    const userDetails = {
      email,
      password,
    };
    login(userDetails, Navigate);
  };

  const handleRegister = () => {
    const userDetails = {
      email,
      password,
      username,
    };
    register(userDetails, Navigate);
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
