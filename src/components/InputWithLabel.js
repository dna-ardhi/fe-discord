import React from 'react';
import { styled } from '@mui/system';
import { func, number, oneOf, oneOfType, string } from 'prop-types';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
});

const Label = styled('label')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px',
  padding: '12px 0',
});

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid black',
  borderRadius: '5px',
  color: '#dcddde',
  background: '#35393f',
  margin: 0,
  fontSize: '16px',
  padding: '0 8px',
});

const InputWithLabel = ({
  value,
  setValue,
  label,
  type,
  placeholder,
  controllerId,
  ...props
}) => {
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label htmlFor={controllerId}>{label}</Label>
      <Input
        id={controllerId}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChangeValue}
      />
    </Wrapper>
  );
};

InputWithLabel.propTypes = {
  value: oneOfType([string, number]),
  setValue: func,
  label: string,
  placeholder: string,
  controllerId: string,
  type: oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
};

export default InputWithLabel;
