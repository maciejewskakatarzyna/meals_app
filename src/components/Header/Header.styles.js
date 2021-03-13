import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 72px;
  position: fixed;
  top: 0;
  padding: 0px 40px;
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(51, 51, 51, 0.2);
  background-color: white;
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

export const Link = styled.a`
  text-decoration: none;
  color: #113c2b;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.2px;

  &:hover {
    padding-bottom: 2px;
    border-bottom: 2px #009a3d solid;
  }
`;

export const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #009a3d;
`;
