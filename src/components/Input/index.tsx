import React, { InputHTMLAttributes } from "react";

import { InputBlock, Input as StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value?: any;
  max?: number;
  min?: number;
}

const Input: React.FC<InputProps> = ({ type, value, max, min, ...rest }) => {
  return (
    <InputBlock>
      <StyledInput
        type={type}
        value={value}
        max={max}
        min={min}
        {...rest}
      ></StyledInput>
    </InputBlock>
  );
};

export default Input;
