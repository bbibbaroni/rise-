import * as _ from "./style";
import { useState } from "react";

interface Option {
  id: string;
  text: string;
}

interface SwitchProps {
  options: Option[];
  defaultSelected?: string;
  onChange?: (selectedId: string) => void;
}

const Switch = ({ options, defaultSelected, onChange }: SwitchProps) => {
  const [selected, setSelected] = useState<string>(
    defaultSelected || options[0]?.id
  );

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <_.Container>
      {options.map((option) => (
        <_.Option
          key={option.id}
          onClick={() => handleSelect(option.id)}
          selected={selected === option.id}
        >
          {option.text}
        </_.Option>
      ))}
    </_.Container>
  );
};

export default Switch;
