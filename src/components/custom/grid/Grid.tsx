import React from 'react';
import styled from '@emotion/styled';

type TGrid = {
  children: React.ReactNode;
};

const DivGrid = styled.div({
  display: 'grid',
});

export const Grid = ({ children }: TGrid) => {
  return <DivGrid>{children}</DivGrid>;
};
