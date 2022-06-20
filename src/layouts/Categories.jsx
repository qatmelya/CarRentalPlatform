import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="Cars" />
        <Menu.Item name="Brands" />
        <Menu.Item name="Models" />
        <Menu.Item name="Colors" />
      </Menu>
    </div>
  );
}
