import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import InputComponent from '../components/input';
import ColorService from '../services/colorService';

export default function ColorAdd() {
  const [open, setOpen] = useState(false);
  const [colorName, setColorName] = useState('');
  const handleClick = (e) => {
    setColorName(e.target.value);
  };
  const addColor = () => {
    if (typeof colorName === typeof '' && colorName.length >= 1) {
      let colorService = new ColorService();
      colorService.add(colorName);
    } else {
      //Show toast that inputtted value is not okay
    }
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button content="New" color="green" labelPosition="right" icon="plus" />
      }
    >
      <Modal.Header>Add New Color</Modal.Header>
      <Modal.Content>
        <InputComponent
          label="Color Name"
          onChange={handleClick}
          value={colorName}
        ></InputComponent>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="red"
          onClick={() => {
            setOpen(false);
            setColorName('');
          }}
        >
          Cancel
        </Button>
        <Button
          content="Add"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            addColor();
            setOpen(false);
            setColorName('');
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}
