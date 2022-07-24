import { styled } from '@mui/system';
import { string } from 'prop-types';
import React from 'react';

const Separator = styled('div')({
  width: '95%',
  backgroundColor: '#b9bbbe',
  height: '1px',
  position: 'relative',
  marginTop: '20px',
  marginBottom: '10px',
});

const DateLabel = styled('div')({
  backgroundColor: '#36393f',
  position: 'absolute',
  left: '45%',
  top: '-10px',
  color: '#b9bbbe',
  padding: '0 5px',
  fontSize: '14px',
});

const DateSeparator = ({ children }) => {
  return (
    <Separator>
      <DateLabel>{children}</DateLabel>
    </Separator>
  );
};

DateSeparator.propTypes = {
  children: string,
};

export default DateSeparator;
