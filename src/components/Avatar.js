import { styled } from '@mui/system';
import { bool, string } from 'prop-types';
import React from 'react';

const AvatarPreview = styled('div')({
  height: '42px',
  width: '42px',
  backgroundColor: '#5865f2',
  borderRadius: '42px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: '700',
  marginLeft: '5px',
  color: 'white',
});

const Avatar = ({ username, large }) => {
  const generateAvatar = (name) => {
    const words = name.split(' ');
    let initialName = name.toUpperCase().substring(0, 2);

    if (words.length > 1) {
      initialName =
        words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
    }

    return initialName;
  };

  return (
    <AvatarPreview style={large ? { height: '80px', width: '80px' } : {}}>
      {generateAvatar(username)}
    </AvatarPreview>
  );
};

Avatar.propTypes = {
  username: string.isRequired,
  large: bool,
};

export default Avatar;
