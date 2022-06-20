import React from 'react';
import { useState } from 'react';
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navi() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  function handleSignOut() {
    setisAuthenticated(false);
  }
  function handleSignIn() {
    setisAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary></CartSummary>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut}></SignedIn>
            ) : (
              <SignedOut signIn={handleSignIn}></SignedOut>
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
