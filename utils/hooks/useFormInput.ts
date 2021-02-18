import * as React from "react";
import { useState } from "react";

const useFormInput = (
  initialValue: string
): {
  value: string;
  setValue: (newValue: string) => void;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState<string>(initialValue);
  return {
    value,
    setValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };
};

export default useFormInput;