import React from "react";
import { FocusEvent, BlurEvent } from "../types/type";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (input: string) => void;
}


const Input: React.FC<InputProps> = ({
  disabled,
  errorMessage,
  placeholder,
  onChange,
  value,
}) => {
  const inputStyles = {
    backgroundColor: disabled ? "#f0f4f8" : "#ffffff",
    color: disabled ? "#6b7280" : "#000000",
    borderColor: errorMessage ? "#e53e3e" : disabled ? "#e5e7eb" : "#a0aec0",
  };

  const focusStyles = {
    borderColor: "#2563eb",
    borderWidth: "2px",
  };
  return (
    <input
    className="h-9 border rounded px-2 outline-none"
      value={value}
      placeholder={placeholder}
      style={{ ...inputStyles }}
      
      onChange={onChange}
    />
  );
};

export default Input;
