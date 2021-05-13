import React from "react";
import styled from "styled-components";

export interface Props {
  className?: string;
  isChecked: boolean;
  handleCheck?: () => void;
  children?: React.ReactNode;
}

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const Input = styled.input`
  height: 12px;
  width: 12px;
  appearance: none;
  border: 1px solid #000000;
  border-radius: 2px;
  outline: none;
  transition-duration: 0.3s;
  cursor: pointer;
  margin-right: 10px;

  &:checked {
    background-color: #000000;
  }

  &:checked + div::before {
    height: 9px;
    width: 9px;
    content: "\\2713";
    display: block;
    text-align: center;
    color: #ffffff;
    position: absolute;
    left: 0;
  }

  &:active {
    border: 2px solid #000000;
  }
`;

const Label = styled.div`
  color: #000000;
`;

export const Checkbox: React.FC<Props> = ({ className, isChecked, handleCheck, children }) => {
  return (
    <CheckboxContainer data-testid="checkbox" className={className}>
      <Input type="checkbox" checked={isChecked} onChange={handleCheck} readOnly={!handleCheck} />
      <Label data-testid="checkbox-label">{children}</Label>
    </CheckboxContainer>
  );
};
