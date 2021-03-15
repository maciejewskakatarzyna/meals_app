import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 72px;
  position: fixed;
  top: 0;
  padding: 0px 40px;
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(51, 51, 51, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 120px;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const Navigation = styled.ul`
  margin-left: 150px;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 50px;
  list-style: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: ${({ theme }) => theme.fontSize.normal};
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.2px;

  &:hover {
    padding-bottom: 2px;
    border-bottom: 2px ${({ theme }) => theme.colors.lightGreen} solid;
  }
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightGreen};
`;
