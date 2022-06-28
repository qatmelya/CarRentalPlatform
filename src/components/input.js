import React from 'react';
import { Input } from 'semantic-ui-react';

const InputComponent = ({ onChange, value, label, placeholder }) => {
  return (
    <Input
      onChange={(e) => onChange(e)}
      label={label}
      placeholder={placeholder}
    />
  );
};
export default InputComponent;
