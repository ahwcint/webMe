import React from 'react';
import styled, { CreateStyled } from '@emotion/styled';

type TTyprography = {
  children?: React.ReactNode | string;
  style?: Record<keyof CreateStyled, string>;
};

export const Typrography = ({ children, style }: TTyprography) => {
  const Typrography = styled.p({ ...style });
  return <Typrography>{children}</Typrography>;
};
