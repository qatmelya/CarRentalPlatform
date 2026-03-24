import React from 'react';
import { useState } from 'react';
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Navi() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const navigate = useNavigate();
  function handleSignOut() {
    setisAuthenticated(false);
    navigate('/');
  }
  function handleSignIn() {
    setisAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <NavLink to="/">
            <Menu.Item name="home" />
          </NavLink>
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
