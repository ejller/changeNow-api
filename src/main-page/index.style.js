import styled, { keyframes } from "styled-components";

const Page = styled.div`
  padding: 150px 0;
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  color: #137e6e;
  margin: 10px 0;
`;

const SubTitle = styled.span`
  color: #282828;
  font-size: 14px;
`;

const FormWrapper = styled.div`
  position: relative;
  padding: 27px 0;
  & > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:first-of-type {
      margin-bottom: 45px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  margin: 0 13px;
  width: 22px;
  height: 25px;
  cursor: pointer;
  &#loading {
    animation: ${rotate} 1s linear infinite;
  }
`;

const Input = styled.input`
  padding: 15px 10px;
  background-color: white;
  color: #282828;
  border: #a7a7a7 solid 1px;
  border-radius: 3px;
  width: 60%;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #137e6e;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 13px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    background-color: #2e9a8a;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -20px;
  font-size: 13px;
`;
const ErrorMessage = styled.span`
  position: absolute;
  top: 11px;
  font-size: 13px;
  color: red;
  margin-bottom: 4px;
`;

export { Title, SubTitle, FormWrapper, Image, Page, Button, Input, Label, ErrorMessage };
