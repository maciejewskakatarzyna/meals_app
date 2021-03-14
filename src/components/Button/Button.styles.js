import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  padding: 7px 12px;
  font-weight: 700;
  width: 100%;
  height: fit-content;
  background: #009a3d;
  border: 2px solid #009a3d;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  white-space: nowrap;

  &:hover {
    background: #08853a;
    border: 2px solid #08853a;
  }
`;

export const SecondaryButton = styled.button`
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  padding: 7px 12px;
  font-weight: 700;
  width: 100%;
  background: #efefef;
  border: 2px solid #efefef;
  color: #113c2b;
  margin-left: 8px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  white-space: nowrap;

  &:hover {
    background: #cdcdcd;
    border: 2px solid #cdcdcd;
  }
`;

export const StyledCloseButton = styled.button`
  width: 27px;
  height: 27px;
  background: #113c2b;
  border: none;
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    width: 16px;
    height: 2px;
    position: absolute;
    background: white;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transform-origin: 50%;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
