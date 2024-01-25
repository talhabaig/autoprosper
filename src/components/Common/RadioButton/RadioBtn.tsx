import React from "react";
import { Form } from "react-bootstrap";

interface RadioButtonProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  checked,
  onChange,
}) => (
  <Form.Check
    type="radio"
    value={value}
    label={label}
    onChange={onChange}
    checked={checked}
  />
);

export default RadioButton;
