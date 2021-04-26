import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 7px 0px #88888838;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: ${(props) => props.theme.fonts.fontSize.medium};
  max-height: 45px;
  height: 45px;
  letter-spacing: 0.04rem;
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  padding: 10px;
  text-transform: capitalize;
  width: 100%;
  :hover {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Button = ({ title }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton theme={theme} type="submit">
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
