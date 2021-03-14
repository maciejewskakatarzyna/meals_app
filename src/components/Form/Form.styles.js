import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 20px 40px -5px rgba(51, 51, 51, 0.3);
  background-color: white;
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
  background: #333333;
  transition: 0.1s all;
`;

export const Label = styled.label`
  color: #333333;
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  font-size: 16px;
`;

export const Input = styled.input`
  color: #333333;
  font-size: 16px;
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;

  &:focus {
    outline: none;
  }
`;

//   .input:focus + .label {
//     top: -22px;
//     font-size: 13px;
//   }

//   .input:not(:placeholder-shown) + .label {
//     top: -22px;
//     font-size: 13px;
//   }

//   .input:focus ~ .formItemBar {
//     background: #009a3d;
//   }
