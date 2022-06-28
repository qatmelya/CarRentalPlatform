import React, { useState, useEffect } from 'react';
import { Button, Modal, FormField, Select } from 'semantic-ui-react';
import InputComponent from '../components/input';
import BrandService from '../services/brandService';
import delay from '../services/delay';
import ModelService from '../services/modelService';

export default function ModelAdd() {
  const [open, setOpen] = useState(false);
  const [modelName, setModelName] = useState('');
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState({});
  const addModel = () => {
    if (
      typeof modelName === typeof '' &&
      modelName.length >= 1 &&
      selectedBrand.id !== null
    ) {
      let modelService = new ModelService();
      modelService.add(modelName, selectedBrand.id);
      delay(1000).then(window.location.reload(false));
    } else {
      //Show toast that inputtted value is not okay
    }
  };
  const handleClick = (e) => {
    //handles text input recording to a value for use in functions
    setModelName(e.target.value);
  };
  const handleClick2 = (e) => {
    //handles dropdown selection and sets its value to a value for use in functions
    setSelectedBrand(
      brands.filter((brand) => brand.name === e.target.innerText)[0]
    );
  };
  useEffect(() => {
    let brandService = new BrandService();
    brandService.getAll().then((result) => {
      setBrands(result.data.data);
    });
  }, []);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button content="New" color="green" labelPosition="right" icon="plus" />
      }
    >
      <Modal.Header>Add New Model</Modal.Header>
      <Modal.Content>
        <InputComponent
          label="Model Name"
          placeholder="Model Name"
          onChange={handleClick}
          value={modelName}
        ></InputComponent>
        <hr />
        <FormField
          control={Select}
          options={
            brands.length > 0
              ? brands.map((brand) => {
                  return {
                    key: brand.id,
                    text: brand.name,
                    value: brand.id,
                  };
                })
              : [{ key: 0, text: 'Loading', value: 'loading' }]
          }
          placeholder="Brand"
          onChange={(brand) => handleClick2(brand)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="red"
          onClick={() => {
            setOpen(false);
            setModelName(''); //Reset every Input values after exit
            setSelectedBrand({});
          }}
        >
          Cancel
        </Button>
        <Button
          content="Add"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            addModel();
            setOpen(false);
            setModelName(''); //Reset every Input values after exit
            setSelectedBrand({});
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}
