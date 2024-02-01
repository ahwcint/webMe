import React from 'react';
import styled, { CreateStyled } from '@emotion/styled';

type TFlex = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  direction?: React.CSSProperties['flexDirection'];
};

export const Flex = ({ children, style, direction }: TFlex) => {
  const Flex = styled.div({
    display: 'flex',
    flexDirection: direction,
    ...style,
  });
  return <Flex>{children}</Flex>;
};
