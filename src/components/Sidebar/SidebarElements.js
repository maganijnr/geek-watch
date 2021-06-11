import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa'

const SideNav = styled.nav`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({isOpen}) => isOpen ? '0':'-100%'};
  opacity: ${({isOpen}) => isOpen ? '1':'0'};
  background: #16796F;
  transition: .5s ease-in-out all;
  z-index: 10;
`

const SideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MenuBtn = styled.div`
  position: absolute;
  top: 20px; 
  right: 40px;
  font-size: 30px;
  cursor: pointer;
`

const MenuBtnIcon = styled(FaTimes)`
  color: #ADC9C5;
`

const SideItems = styled.div`
  display: flex;
  flex-direction: column;
`

const SideItem = styled(Link)`
  text-decoration: none;
  color: #ADC9C5;
  margin: 1.5rem 0 0;
  font-size: 30px;
`

export {
  SideNav,
  SideContainer,
  MenuBtn,
  MenuBtnIcon,
  SideItems,
  SideItem
}