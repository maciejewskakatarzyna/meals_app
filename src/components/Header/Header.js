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
      <Logo to='/'>ThermoPlan</Logo>
      <Navigation>
        <NavItem>
          <Link to='/dinners'>Obiady</Link>
        </NavItem>
        <NavItem>
          <Link to='/desserts'>Desery</Link>
        </NavItem>
        <NavItem>
          <Link to='/sappers'>Kolacje</Link>
        </NavItem>
      </Navigation>
      <Button onClick={() => toggleForm()}>Dodaj danie</Button>
    </Container>
  </Wrapper>
);

export default Header;
