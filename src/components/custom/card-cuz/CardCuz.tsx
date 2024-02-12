import React from 'react';
import CardNeon from './CardNeon.styled';
import CardDefault from './CardDefault.styled';

type TCardVarient = 'default' | 'neon';
type TWidthSize = 'auto' | 'ssm' | 'sm' | 'mmd' | 'md' | 'llg' | 'lg';

type TCoolCard = {
  children: React.ReactNode | React.ReactElement;
  /**
   * Style platform Element
   */
  style?: React.CSSProperties;
  varient?: TCardVarient;
  marginAuto?: boolean;
  widthSize?: TWidthSize;
};

export const CardCuz = ({
  children,
  style,
  widthSize,
  varient,
  marginAuto,
}: TCoolCard) => {
  let Card;
  const mergeStyle = {
    margin: marginAuto ? 'auto' : '0',
    width: widthSize ? convertWidthSize(widthSize) : 'auto',
    ...style,
  };

  switch (varient) {
    case 'default':
      Card = CardDefault({ style: mergeStyle });
      break;
    case 'neon':
      Card = CardNeon({ style: mergeStyle });
      break;
    default:
      Card = CardDefault({ style: mergeStyle });
  }

  return <Card>{children}</Card>;
};

const convertWidthSize = (widthSize: TWidthSize): string => {
  switch (widthSize) {
    case 'auto':
      return 'auto';
    case 'ssm':
      return 'clamp(10rem,10%,10%)';
    case 'sm':
      return 'clamp(20rem,20%,20%)';
    case 'mmd':
      return 'clamp(40rem,40%,40%)';
    case 'md':
      return 'clamp(60rem,60%,60%)';
    case 'llg':
      return 'clamp(80rem,80%,80%)';
    case 'lg':
      return '100%';
  }
};
