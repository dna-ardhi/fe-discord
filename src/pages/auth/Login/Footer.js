import React, { useContext } from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import RedirectInfo from '../../../components/RedirectInfo';
import AuthContext from '../../../context/AuthContext';

const Footer = () => {
  const { isValid, handleLogin, handlePushToRegister } =
    useContext(AuthContext);
  return (
    <div>
      <PrimaryButton
        additionalStyles={{ marginTop: '30px' }}
        disabled={!isValid}
        onClick={handleLogin}>
        Log in
      </PrimaryButton>
      <RedirectInfo
        startText='Need an account? '
        additionalStyles={{ marginTop: '8px' }}
        redirectHandler={handlePushToRegister}>
        Create an Account
      </RedirectInfo>
    </div>
  );
};

export default Footer;
