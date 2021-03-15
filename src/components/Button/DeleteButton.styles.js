import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: #${({ theme }) => theme.colors.darkGreen};
  }
`;
