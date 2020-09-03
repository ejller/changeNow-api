import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  background-color: white;
  border: #a7a7a7 solid 1px;
  border-radius: 4px;
  width: 230px;
`;

const Input = styled.input`
  box-sizing: border-box;
  background-color: initial;
  width: 73%;
  color: #282828;
  font-size: 15px;
  padding: 13px 7px;
  border: none;
  border-right: #a7a7a7 solid 1px;
  &:focus {
    outline: none;
  }
`;

const Currency = styled.div`
  cursor: pointer;
  display: inline-flex;
  padding: 0px 13px 0px 4px;
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
