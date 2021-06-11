
import styled from 'styled-components'

const CardImage = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 200px;
  transition: transform 450ms;
  margin: .5rem;
  cursor: pointer;

  :hover{
    transform: scale(1.03);
  }
`


export {

  CardImage
}