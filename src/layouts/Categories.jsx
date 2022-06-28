import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical inverted>
        <Menu.Item name="Cars" as={NavLink} to="/cars" />
        <Menu.Item name="Brands" as={NavLink} to="/brands" />
        <Menu.Item name="Models" as={NavLink} to="/models" />
        <Menu.Item name="Colors" as={NavLink} to="/colors" />
      </Menu>
    </div>
  );
}
