import styled from 'styled-components';

export const Wrapper = styled.li`
  border-radius: 4px;
  margin: 0px 16px 32px 16px;
  box-shadow: 0 1px 2px 0 rgba(51, 51, 51, 0.15);
  padding: 0;
  width: 276px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px 0 rgba(51, 51, 51, 0.15);
    transition: box-shadow 0.2s;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 230px;
`;

export const Title = styled.div`
  padding: 16px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.normal};
    line-height: 20px;
    font-weight: 500;
    margin: 0 10px 0 0;
  }
`;
