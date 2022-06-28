import React from 'react';
import { Input } from 'semantic-ui-react';

const InputComponent = ({ onChange, value }) => {
  return (
    <>
      <Input onChange={(e) => onChange(e)} />
    </>
  );
};
export default InputComponent;
