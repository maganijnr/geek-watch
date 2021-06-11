import React from 'react'

import {
  SideNav,
  SideContainer,
  MenuBtn,
  MenuBtnIcon,
  SideItems,
  SideItem
} from './SidebarElements'

const Sidebar = ({ isOpen, toggleNav }) => {
  return (
    <SideNav isOpen={isOpen}>
      <SideContainer>
        <MenuBtn onClick={toggleNav}>
          <MenuBtnIcon/>
        </MenuBtn>
        <SideItems>
          <SideItem onClick={toggleNav} to="/">Movies</SideItem>
          <SideItem onClick={toggleNav} to="/">Tv Shows</SideItem>
        </SideItems>
      </SideContainer>
    </SideNav>
  )
}

export default Sidebar
