import styled from "styled-components";

const Page = styled.div`
  padding: 150px 0;
  text-align: left;
  display: inline-block;
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
  padding: 30px 0;
  & > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    &:first-of-type {
      margin-bottom: 45px;
    }
  }
`;

const Image = styled.img`
  width: 22px;
  margin: 0 13px;
  cursor: pointer;
`;

const Input = styled.input`
  background-color: white;
  border: #a7a7a7 solid 1px;
  border-radius: 3px;
  padding: 15px 10px;
  width: 60%;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #137e6e;
  border: none;
  border-radius: 3px;
  color: white;
  padding: 15px 30px;
`;

const Label = styled.label`
  position: absolute;
  font-size: 13px;
  top: -20px;
`;

export { Title, SubTitle, FormWrapper, Image, Page, Button, Input, Label };
