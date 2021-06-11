import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background: #16796F;
  position: relative;
`

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 auto;
`

const NavLogo = styled(Link)`
  text-decoration: none;
  font-size: 40px;
  color: #ADC9C5;
  font-weight: 700;
  font-family: 'Farro', sans-serif;
`

const MenuBtn = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
`

const MenuBtnIcon = styled(FaBars)`
  color: #ADC9C5;
`

const NavItems = styled.div`
  display: flex;
  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavItem = styled(Link)`
  text-decoration: none;
  color: #ADC9C5;
  margin: 0 1rem;
  font-size: 20px;
`

export {
  Nav,
  NavContainer, 
  MenuBtn,
  MenuBtnIcon,
  NavLogo, 
  NavItems,
  NavItem
}