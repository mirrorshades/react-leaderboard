import React from "react";
import { ValidatorComponent } from "react-form-validator-core";
import styled from "styled-components";

const TextInput = styled.input`
  display: inline-block;
  color: #666;
  padding: 0.462em 0.769em;
  font-family: inherit;
  font-weight: inherit;
  font-size: 1em;
  line-height: 1.65;
  max-width: 100%;
  border: 1px solid #e1e1e1;
  background: #fff;
  border-radius: 3px;
  -webkit-appearance: none;
  width: 100%;
`;

class InputField extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props;

    return (
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          margin: "10px 0"
        }}
      >
        <TextInput
          {...rest}
          ref={r => {
            this.input = r;
          }}
        />
      </div>
    );
  }
}

export default InputField;
