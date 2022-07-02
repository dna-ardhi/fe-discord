import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = ({
  additionalStyles,
  disabled,
  onClick,
  children,
  ...props
}) => {
  return (
    <Button
      variant='contained'
      sx={{
        bgcolor: '#5865f2',
        color: 'white',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        height: '40px',
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
