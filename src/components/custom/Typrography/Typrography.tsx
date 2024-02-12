import React from 'react';
import styled, { CreateStyled } from '@emotion/styled';

type TTyprography = {
  children?: React.ReactNode | string;
} & React.CSSProperties &
  React.HTMLAttributes<HTMLParagraphElement>;

export const Typrography = (props: TTyprography) => {
  const { children } = props;
  const Typrography = styled.p({ ...(props as React.CSSProperties) });
  return (
    <Typrography {...(props as React.HTMLAttributes<HTMLParagraphElement>)}>
      {children}
    </Typrography>
  );
};
