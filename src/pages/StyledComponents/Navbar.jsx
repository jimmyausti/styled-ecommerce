import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'


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
  const { items } = useContext(ShopContext);
  return (
    <NavbarContainer>
      <Links to='/'>Shop</Links>
      <Links to='/checkout'>Cart:<span>{items.length}</span></Links>
    </NavbarContainer>
  )
}

export default Navbar
