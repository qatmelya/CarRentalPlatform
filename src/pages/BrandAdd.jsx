import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import InputComponent from '../components/input';
import BrandService from '../services/brandService';
import delay from '../services/delay';

export default function BrandAdd() {
  const [open, setOpen] = useState(false);
  const [brandName, setBrandName] = useState('');
  const handleClick = (e) => {
    setBrandName(e.target.value);
  };
  const addBrand = () => {
    if (typeof brandName === typeof '' && brandName.length >= 3) {
      let brandService = new BrandService();
      brandService.add(brandName);
      delay(1000).then(window.location.reload(false));
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
      <Modal.Header>Add New Brand</Modal.Header>
      <Modal.Content>
        <InputComponent
          label="Brand Name"
          onChange={handleClick}
          value={brandName}
        ></InputComponent>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="red"
          onClick={() => {
            setOpen(false);
            setBrandName('');
          }}
        >
          Cancel
        </Button>
        <Button
          content="Add"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            addBrand();
            setOpen(false);
            setBrandName('');
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}
