import { Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import RedirectInfo from '../../../components/RedirectInfo';
import AuthContext from '../../../context/AuthContext';

const getFormInvalidMsg = () =>
  'Username should contains between 3 and 12 characters, and password should contains between 6 and 12 characters. Also correct e-mail address should be provided';

const getFormValidMsg = () => 'Press to Register!';

const Footer = () => {
  const { isValid, handleRegister, handlePushToLogin } =
    useContext(AuthContext);
  return (
    <>
      <Tooltip title={!isValid ? getFormInvalidMsg() : getFormValidMsg()}>
        <div>
          <PrimaryButton
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isValid}
            onClick={handleRegister}>
            Sign up
          </PrimaryButton>
        </div>
      </Tooltip>
      <RedirectInfo
        additionalStyles={{ marginTop: '8px' }}
        redirectHandler={handlePushToLogin}>
        Already have an account?
      </RedirectInfo>
    </>
  );
};

export default Footer;
