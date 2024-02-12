import styled from '@emotion/styled';

type TCard = { style?: React.CSSProperties };

const Card = ({ style }: TCard) => {
  return styled.div({
    background:
      'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3169642857142857) 300%)',
    borderTop: '1px solid #ffffff50',
    outline: '0px solid #ffffff00',
    borderRadius: '0.5rem',
    padding: '1rem',
    transition:
      'outline 0.3s linear,background-size 1s ease,border 0.3s linear,box-shadow 0.3s linear',
    backgroundPosition: 'center',
    boxShadow: '0px 0px 0px #ffffff33',
    animation: 'bgLogin infinite 3s alternate ease-in-out',
    '&:hover': {
      borderTop: '1px solid #ffffff00',
      outline: '1px solid #ffffff',
      boxShadow: '0px 0px 10px #ffffff33',
    },
    ...style,
    '@keyframes bgLogin': {
      '0%': {
        backgroundSize: '150%',
      },
      '100%': {
        backgroundSize: '300%',
      },
    },
  });
};

export default Card;
