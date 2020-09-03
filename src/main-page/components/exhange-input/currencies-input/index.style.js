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
  background-color: initial;
  width: 200px;
  color: #282828;
  font-size: 15px;
  padding: 13px 7px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const ClearIcon = styled.img`
  cursor: pointer;
  position: absolute;
  height: 11px;
  top: 16px;
  right: 16px;
`;

const Dropdown = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-top: #a7a7a7 solid 1px;
  max-height: 120px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Option = styled.div`
  box-sizing: border-box;
  padding: 8px 7px;
  cursor: pointer;
  display: flex;
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
      margin-left: 5px;
      margin-right: 14px;
      color: #282828;
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
