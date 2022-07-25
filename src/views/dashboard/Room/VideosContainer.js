import { styled } from '@mui/system';
import React from 'react';

const MainContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  flexGrow: 1,
});

const VideosContainer = () => {
  return <MainContainer>VideosContainer</MainContainer>;
};

export default VideosContainer;
