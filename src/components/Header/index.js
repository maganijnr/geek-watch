import React from 'react'

import {
  Nav,
  NavContainer, 
  MenuBtn,
  MenuBtnIcon,
  NavLogo, 
  NavItems,
  NavItem
} from './HeaderElements'

const Header = ({toggleNav}) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          Geek Watch
        </NavLogo>
        <MenuBtn onClick={toggleNav}>
          <MenuBtnIcon/>
        </MenuBtn>
        <NavItems>
          <NavItem to="/">Movies</NavItem>
          <NavItem to="/">Tv Shows</NavItem>
        </NavItems>
      </NavContainer>
    </Nav>
  )
}

export default Header
