import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const RedirectText = styled('span')({
  color: '#00AFF4',
  fontWeight: 500,
  cursor: 'pointer',
});

const RedirectInfo = ({
  children,
  startText,
  redirectHandler,
  additionalStyles,
  ...props
}) => {
  return (
    <Typography
      variant='subtitle2'
      color='#72767d'
      style={additionalStyles ? additionalStyles : {}}>
      {startText}
      <RedirectText onClick={redirectHandler}>{children}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
