import React from 'react';
import styled, { CreateStyled } from '@emotion/styled';

type TTyprography = {
  children?: React.ReactNode | string;
} & React.CSSProperties &
  React.HTMLAttributes<HTMLParagraphElement>;

const TyprographyRender = styled.p((props: any) => ({
  ...(props.cssProp as React.CSSProperties),
}));

export const Typrography = (props: TTyprography) => {
  const { children, ...cssProp } = props;
  return <TyprographyRender cssProp={cssProp}>{children}</TyprographyRender>;
};
