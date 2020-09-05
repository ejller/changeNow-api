import styled from "styled-components";

const Wrapper = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  background-color: white;
  border: #a7a7a7 solid 1px;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 13px 7px;
  width: 73%;

  font-size: 15px;
  box-sizing: border-box;
  background-color: initial;
  color: #282828;
  border: none;
  border-right: #a7a7a7 solid 1px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
  &:focus {
    outline: none;
  }
`;

const Currency = styled.div`
  padding: 0px 13px 0px 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & img {
    width: 14px;
    margin-right: 3px;
    -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #137e6e) brightness(2.8);
    filter: opacity(0.5) drop-shadow(0 0 0 #137e6e) brightness(2.8);
  }
  & span {
    font-size: 13px;
  }
`;

export { Wrapper, Input, Currency };
