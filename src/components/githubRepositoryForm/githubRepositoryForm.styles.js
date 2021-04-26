import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const StyledFormTitle = styled.span`
  font-size: ${(props) => props.theme.fonts.fontSize.xxLarge};
  font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
  color: ${(props) => props.theme.colors.black};
  text-transform: uppercase;
  padding: 5px;
`;

export const StyledForm = styled.form`
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
