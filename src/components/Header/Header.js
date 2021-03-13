import React from 'react';
import Button from 'components/Button/Button';
import {
  Wrapper,
  Container,
  Logo,
  Navigation,
  NavItem,
  Link,
} from './Header.styles';

const Header = ({ toggleForm }) => (
  <Wrapper>
    <Container>
      <Logo>ThermoPlan</Logo>
      <Navigation>
        <NavItem>
          <Link>Obiady</Link>
        </NavItem>
        <NavItem>
          <Link>Desery</Link>
        </NavItem>
        <NavItem>
          <Link>Kolacje</Link>
        </NavItem>
      </Navigation>
      <Button onClick={() => toggleForm()}>Dodaj danie</Button>
    </Container>
  </Wrapper>
);

export default Header;
