import React from 'react';
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary></CartSummary>
            <SignedOut></SignedOut>
            <SignedIn></SignedIn>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
