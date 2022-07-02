import React, { useContext } from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import AuthContext from '../../../context/AuthContext';

const Footer = () => {
  const { isValid, handleLogin } = useContext(AuthContext);
  return (
    <div>
      <PrimaryButton
        additionalStyles={{ marginTop: '30px' }}
        disabled={!isValid}
        onClick={handleLogin}>
        Log in
      </PrimaryButton>
    </div>
  );
};

export default Footer;
