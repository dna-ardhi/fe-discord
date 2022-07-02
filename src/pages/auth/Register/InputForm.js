import React, { useContext } from 'react';
import InputWithLabel from '../../../components/InputWithLabel';
import AuthContext from '../../../context/AuthContext';

const InputForm = () => {
  const { email, password, username, setEmail, setPassword, setUsername } =
    useContext(AuthContext);
  return (
    <>
      <InputWithLabel
        controllerId='input-email-register'
        value={email}
        setValue={setEmail}
        label='E-mail Address'
        type='email'
        placeholder='Enter e-mail address'
      />
      <InputWithLabel
        controllerId='input-username-register'
        value={username}
        setValue={setUsername}
        label='username'
        type='text'
        placeholder='Enter your name'
      />
      <InputWithLabel
        controllerId='input-password-register'
        value={password}
        setValue={setPassword}
        label='Password'
        type='password'
        placeholder='Enter password'
      />
    </>
  );
};

export default InputForm;
