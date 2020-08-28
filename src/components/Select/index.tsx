import React, { SelectHTMLAttributes } from "react";

import { SelectBlock, Select as StyledSelect } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{
    value: string;
    name: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ options, ...rest }) => {
  return (
    <SelectBlock>
      <StyledSelect {...rest}>
        <option disabled hidden>
          Selecione uma opção
        </option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </StyledSelect>
    </SelectBlock>
  );
};

export default Select;
