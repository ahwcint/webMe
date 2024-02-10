import React from 'react';
import styled from '@emotion/styled';
import { cn } from '@/lib/utils';

type TCoolCard = {
  children: React.ReactNode | React.ReactElement;
  /**
   * Style platform Element
   */
  style: React.CSSProperties;
};

export const CoolCard = ({ children, style }: TCoolCard) => {
  const Card = styled.div({
    background:
      'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3169642857142857) 1000%)',
    borderTop: '1px solid #ffffff50',
    borderLeft: '1px solid #ffffff00',
    borderRight: '1px solid #ffffff00',
    borderBottom: '1px solid #ffffff00',
    borderRadius: '0.5rem',
    padding: '1rem',
    transition: 'background-size 1s ease,border 0.3s ease-out',
    backgroundPosition: 'center',
    animation: 'bgLogin infinite 3s alternate',
    '&:hover': {
      borderTop: '1px solid #ffffff',
      borderLeft: '1px solid #ffffff',
      borderRight: '1px solid #ffffff',
      borderBottom: '1px solid #ffffff',
      boxShadow: '0px 0px 10px #ffffff33',
    },
    ...style,
    '@keyframes bgLogin': {
      '0%': {
        backgroundSize: '150%',
      },
      '100%': {
        backgroundSize: '200%',
      },
    },
  });

  return <Card>{children}</Card>;
};
