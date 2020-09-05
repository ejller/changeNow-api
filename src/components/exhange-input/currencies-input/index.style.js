import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  display: inline-block;
  background-color: white;
  border: #a7a7a7 solid 1px;
  border-radius: 4px;
  width: 230px;
  z-index: 3;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 13px 7px;
  width: 200px;
  background-color: initial;
  color: #282828;
  font-size: 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const ClearIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 11px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-top: #a7a7a7 solid 1px;
  max-height: 125px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Option = styled.div`
  box-sizing: border-box;
  padding: 8px 7px;
  display: flex;
  cursor: pointer;
  &:first-of-type {
    padding-top: 13px;
  }
  &:last-of-type {
    padding-bottom: 13px;
  }
  & img {
    -webkit-filter: opacity(0.5) drop-shadow(0 0 0 #137e6e) brightness(2.8);
    filter: opacity(0.5) drop-shadow(0 0 0 #137e6e) brightness(2.8);
    height: 15px;
  }
  & span {
    &:first-of-type {
      display: inline-block;
      color: #282828;
      margin-left: 5px;
      margin-right: 14px;
      font-size: 13px;
    }
    color: #a7a7a7;
    font-size: 12px;
  }
  &:hover {
    background-color: #f4f4f4;
  }
`;

export { Input, ClearIcon, Dropdown, Wrapper, Option };
