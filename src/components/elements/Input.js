import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { useFormikContext } from 'formik';

const StyledInput = styled.input`
  font-size: ${(props) => props.theme.fonts.fontSize.regular};
  font-weight: ${(props) => props.theme.fonts.fontWeight.regular};
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 4px;
  outline: none;
`;

const StyledFormArea = styled.div`
  flex-direction: row;
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const StyledInputLabel = styled.label`
  font-size: ${(props) => props.theme.fonts.fontSize.medium};
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  flex-basis: 20%;
`;

const Input = ({ name, label }) => {
  const theme = useContext(ThemeContext);
  const { errors, touched, handleChange } = useFormikContext();
  return (
    <StyledFormArea>
      <StyledInputLabel theme={theme}>{label}</StyledInputLabel>
      <StyledInput
        theme={theme}
        type="text"
        name={name}
        placeholder={label}
        error={errors.value && touched.value}
        onChange={handleChange}
      />
    </StyledFormArea>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
