import styled from "styled-components";

export const ColorInput = styled.input`
  border-radius: 4px;
  height: 35px;
  width: 35px;
  margin-right: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 100%;
  }
`
