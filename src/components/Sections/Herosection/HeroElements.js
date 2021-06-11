import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import { BiSearchAlt } from 'react-icons/bi'

const HeroBody = styled.section`
  height: 70vh;
  width: 100%;
`
const HeroBg = styled.div`
  width: 100%;
  height: 70vh;
  position: absolute;

  :before{
    content:'';
    position:absolute;
    top:0; left:0; right:0; bottom:0;
    background: linear-gradient(135deg, rgba(16, 86, 79, .2) 0%, rgba(16, 86, 79, .6) 80%), linear-gradient(135deg, rgba(16, 86, 79, .3) 0%, transparent 100%);
    z-index:2
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit:cover;
`

const HeroContent = styled.div`
  z-index: 3;
  position: relative;
  margin: 0 auto;
  padding-left: 3rem;
  padding-top: 7rem;
  padding-right: 1rem;
  height: 100%;
  

  @media screen and (max-width: 768px){
    padding: 7rem 0 0;
    text-align: center;
  }
  /* z-index: 3;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center; */

`
const HeroH2 = styled.h2`
  font-size: 4rem;
  color: #FFF;
  @media screen and (max-width: 768px){
    font-size: 3rem;
  }

  @media screen and (max-width: 568px){
    font-size: 2rem;
  }

`
const HeroP = styled.p`
  font-size: 1.2rem;
  color: #FFF;
  width: 700px;
  @media screen and (max-width: 768px){
    font-size: 1.2rem;
    color: #FFF;
    max-width: 500px;
  }

  @media screen and (max-width: 568px){
    max-width: 300px;
    font-size: 1rem;
    margin: auto;
  }
`

const HeroBtn = styled(Link)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  border: 0;
  border-radius: 0.5rem;
  color: #FFF;
  background: #ACD9C5;
  text-decoration: none;
  margin-bottom: 1rem;

  :hover{
    opacity: 1.5;
    background: rgba(173, 208, 197,1);
  }

  @media screen and (max-width: 768px){
    font-size: 1rem;
  }

`



export {
  HeroBody, 
  HeroBg,
  Image,
  HeroContent,
  HeroH2,
  HeroP,
  HeroBtn,
}