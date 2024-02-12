import React from 'react';
import styled, { CreateStyled } from '@emotion/styled';

type TTyprography = {
  children?: React.ReactNode | string;
} & React.CSSProperties &
  React.HTMLAttributes<HTMLParagraphElement>;

export const Typrography = (props: TTyprography) => {
  const { children, ...cssProp } = props;
  const Typrography = styled.p({ ...(cssProp as React.CSSProperties) });
  return <Typrography>{children}</Typrography>;
};
