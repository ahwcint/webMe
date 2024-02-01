import React from 'react';
import styled from '@emotion/styled';

type TGrid = {
  children: React.ReactNode;
};

export const Grid = ({ children }: TGrid) => {
  const Grid = styled.div({
    display: 'grid',
  });
  return <Grid>{children}</Grid>;
};
