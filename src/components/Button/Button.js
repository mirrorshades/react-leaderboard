import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.4);
  display: inline-block;
  font-weight: 400;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
