import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.nav`
  width: 100%;
  height: 2rem;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Links = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 0.2rem;

  &:hover {
    text-decoration: underline;
  } 
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <Links to='/'>Shop</Links>
      <Links to='/checkout'>Checkout</Links>
    </NavbarContainer>
  )
}

export default Navbar