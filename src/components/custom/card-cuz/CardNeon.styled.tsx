import styled from '@emotion/styled';

type TCard = { style?: React.CSSProperties };

const Card = ({ style }: TCard) => {
  return styled.div({
    background: 'radial-gradient(circle, rgb(0 0 0) 0%, #7b7b7b 300%)',
    borderTop: '1px solid #ffffff50',
    outline: '0px solid #ffffff00',
    borderRadius: '0.5rem',
    padding: '1rem',
    transition:
      'outline 0.2s ease-out,border 0.2s ease-out,box-shadow 0.2s ease-out',
    backgroundPosition: 'center',
    boxShadow: '0px 0px 0px #ffffff33',
    animation: 'bgLogin infinite 5s alternate ease-in-out',
    '&:hover': {
      borderTop: '1px solid #ffffff00',
      outline: '1px solid #ffffff',
      boxShadow: '0px 0px 10px #ffffff33',
    },
    ...style,
    '@keyframes bgLogin': {
      '0%': {
        backgroundSize: '300%',
      },
      '100%': {
        backgroundSize: '500%',
      },
    },
  });
};

export default Card;
