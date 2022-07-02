import React, { useContext } from 'react';
import InputWithLabel from '../../../components/InputWithLabel';
import AuthContext from '../../../context/AuthContext';

const InputForm = () => {
  const { email, password, setEmail, setPassword } = useContext(AuthContext);
  return (
    <>
      <InputWithLabel
        controllerId='input-email-login'
        value={email}
        setValue={setEmail}
        label='E-mail'
        type='email'
        placeholder='Enter e-mail address'
      />
      <InputWithLabel
        controllerId='input-password-login'
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
