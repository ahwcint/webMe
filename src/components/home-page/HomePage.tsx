import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div<{ text?: string }>((props) => ({
  background: 'transparent',
  width: '100vw',
  height: '100vh',
  fontSize: '1rem',
  transition:
    'background 0.3s linear, font-size 0.2s cubic-bezier(1, 0.01, 0.43, 2.14)',
  '&:hover': {
    background: 'tomato',
    fontSize: '4rem',
  },
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}));

export const HomePage = () => {
  return <Div>{'Welcome to webMe'}</Div>;
};
