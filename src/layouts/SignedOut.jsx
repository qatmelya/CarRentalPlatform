import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

export default function SignedOut() {
  return (
    <div>
      <Menu.Item>
        <Button primary>Sign In</Button>
        <Button primary style={{ marginLeft: '0.2em' }}>
          Register
        </Button>
      </Menu.Item>
    </div>
  );
}
