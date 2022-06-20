import React from 'react';
import { Image, Dropdown, Menu } from 'semantic-ui-react';

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc"
        />
        <Dropdown pointing="top right" text="Mehmet">
          <Dropdown.Menu>
            <Dropdown.Item text="My Information" icon="info" />
            <Dropdown.Item text="Sign Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
