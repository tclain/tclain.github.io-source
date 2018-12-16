import styled from 'styled-components'

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-left: none;
`

export const NavItem = styled.a`
  font-weight: lighter;
  text-transform: uppercase;
  margin-right: 0.2em;
  display: block;
  text-decoration: none;
  color: black;
  &:hover {
    color: red;
  }
  &:visited {
    color: black;
  }
`
