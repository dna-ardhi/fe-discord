import { styled } from '@mui/system';
import React from 'react';

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
});

const SideBar = () => {
  return <MainContainer>Sidebar</MainContainer>;
};

export default SideBar;
