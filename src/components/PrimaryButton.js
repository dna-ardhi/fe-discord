import React from 'react';
import { Button } from '@mui/material';
import { bool, func, node, object } from 'prop-types';

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
        fontWeight: 400,
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

PrimaryButton.propTypes = {
  children: node.isRequired,
  disabled: bool,
  onClick: func,
  additionalStyles: object,
};

export default PrimaryButton;
