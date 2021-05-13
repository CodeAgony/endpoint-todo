import React from "react";
import styled, { keyframes } from "styled-components";
import { useAppSelector } from "../store";
import { ReactComponent as Spinner } from "../assets/icons/spinner.svg";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: #383e54;
  height: 50px;
  border: 1px solid #000000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 20px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(Spinner)`
  width: 30px;
  height: 30px;
  animation: ${rotate} 2s linear infinite;
`;

export const Header = () => {
  const { isLoading } = useAppSelector(state => state.main);

  return (
    <HeaderContainer data-testid="header">
      <Logo>Todo App</Logo>
      {isLoading && <StyledSpinner fill="#ffffff" />}
    </HeaderContainer>
  );
};
