import styled from '@emotion/styled';

type TCard = { style?: React.CSSProperties };

const Card = ({ style }: TCard) => {
  return styled.div({
    border: '1px solid #ffffff50',
    borderRadius: '0.5rem',
    padding: '1rem',
    ...style,
  });
};

export default Card;
