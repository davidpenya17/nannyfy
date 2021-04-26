import styled from 'styled-components';

export const StyledTable = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  padding: 20px;
  flex-basis: 50%;
  margin: 20px;
  width: 100%;
  height: 100%;
`;

export const StyledTableTitle = styled.span`
  font-size: ${(props) => props.theme.fonts.fontSize.xxLarge};
  font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
  color: ${(props) => props.theme.colors.black};
  text-transform: uppercase;
`;

export const StyledTableBody = styled.table`
  width: 100%;
  margin-top: 25px;
`;

export const StyledTableRow = styled.tr`
  padding: 5px 10px;
  display: flex;
  text-align: left;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;
  border-radius: 4px;
`;
export const StyledTableDataSm = styled.td`
  padding: 10px;
  display: flex;
  width: auto;
  text-align: left;
  font-size: ${(props) => props.theme.fonts.fontSize.medium};
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  color: ${(props) => props.theme.colors.white};
`;
export const StyledTableDataXl = styled.td`
  width: 100%;
  display: flex;
`;

export const StyledRepositoryWord = styled.span`
  font-size: ${(props) => props.theme.fonts.fontSize.medium};
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  color: ${(props) => props.theme.colors.white};
  padding-left: 10px;
`;

export const StyledEmptyTable = styled.p`
  font-size: ${(props) => props.theme.fonts.fontSize.regular};
  font-weight: ${(props) => props.theme.fonts.fontWeight.regular};
  color: ${(props) => props.theme.colors.black};
  margin: 10px 0;
`;
