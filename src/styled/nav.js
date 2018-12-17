import styled from 'styled-components'

export const Nav = styled.ul`
  list-style: none;
`

export const NavItem = styled.a`
  font-weight: lighter;
  float: right;
  margin-right: 0.6em;
  font-size: 1.2em;
  display: block;
  text-decoration: none;
  color: black;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: red;
    border-bottom: 2px solid red;
  }
  &:visited {
    color: black;
  }
`
