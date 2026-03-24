import React from 'react';
import { NavLink } from 'react-router-dom';

import { Dropdown } from 'semantic-ui-react';

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Cart">
        <Dropdown.Menu>
          <Dropdown.Item>Araba</Dropdown.Item>
          <Dropdown.Item>Araba2</Dropdown.Item>
          <Dropdown.Item>Araba3</Dropdown.Item>
          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item as={NavLink} to="/cart">
            Cart Detail
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
