import { styled } from '@mui/system';
import React from 'react';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ data }) => {
  return <MainContainer>{data}</MainContainer>;
};

export default FriendsList;
