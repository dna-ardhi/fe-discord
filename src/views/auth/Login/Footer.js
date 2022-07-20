import { Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import RedirectInfo from '../../../components/RedirectInfo';
import AuthContext from '../../../context/AuthContext';

const getFormInvalidMsg = () =>
  'Enter correct e-mail address and password should contains between 6 and 12 characters';

const getFormValidMsg = () => 'Press to log in!';

const Footer = () => {
  const { isValid, handleLogin, handlePushToRegister } =
    useContext(AuthContext);
  return (
    <>
      <Tooltip title={!isValid ? getFormInvalidMsg() : getFormValidMsg()}>
        <div>
          <PrimaryButton
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isValid}
            onClick={handleLogin}>
            Log in
          </PrimaryButton>
        </div>
      </Tooltip>
      <RedirectInfo
        startText='Need an account?'
        additionalStyles={{ marginTop: '8px' }}
        redirectHandler={handlePushToRegister}>
        Create an Account
      </RedirectInfo>
    </>
  );
};

export default Footer;
