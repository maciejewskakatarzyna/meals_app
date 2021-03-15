import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 20px 40px -5px rgba(51, 51, 51, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 70px 80px 50px;
  position: fixed;
  top: 20%;
  left: 0;
  right: 0;
  width: fit-content;
  margin: 0 auto;
  border-radius: 4px;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  button {
    margin-top: 50px;
  }
`;

export const FormItem = styled.div`
  width: 100%;
  margin: 24px 0;
  position: relative;
  flex-shrink: 0;
`;

export const FormItemBar = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.grey};
  transition: 0.1s all;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.normal};
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;

  &:focus {
    outline: none;
  }

  &:focus + Label {
    top: -22px;
    font-size: ${({ theme }) => theme.fontSize.extraSmall};
  }

  &:not(:placeholder-shown) + Label {
    top: -22px;
    font-size: ${({ theme }) => theme.fontSize.extraSmall};
  }
`;
