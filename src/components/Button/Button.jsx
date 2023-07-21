// import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      Load more
    </LoadMoreButton>
  );
};

export default Button;
