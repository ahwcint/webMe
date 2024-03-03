import React from 'react';
import styled from '@emotion/styled';

type TFlex = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  direction?: React.CSSProperties['flexDirection'];
  fullWidth?: boolean;
  childFullWidth?: boolean;
};

export const Flex = ({
  children,
  style,
  direction,
  fullWidth,
  childFullWidth,
}: TFlex) => {
  const Flex = styled.div({
    display: 'flex',
    flexDirection: direction,
    width: fullWidth ? '100%' : 'auto',
    '& > *': {
      width: childFullWidth ? '100%' : 'auto',
    },
    ...style,
  });
  return <Flex>{children}</Flex>;
};
