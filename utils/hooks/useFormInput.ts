import * as React from "react";
import { useState } from "react";

const useFormInput = (
  initialValue: string
): {
  value: string | null;
  setValue: (newValue: string | null) => void;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState<string | null>(initialValue);
  return {
    value,
    setValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };
};

export default useFormInput;