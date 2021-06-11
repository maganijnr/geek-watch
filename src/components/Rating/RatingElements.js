import styled from 'styled-components/macro'

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Rate = styled.div`
  display: inline-flex;
  align-items: center;
  width: 120px;
  max-width: 120px;
  justify-content: space-between;
  font-size: 1rem;

  
  h3{
    color: #FFF;
  }
`
const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FullStar = styled(BsStarFill)`
  color: #FFD700;
`

const HalfStar = styled(BsStarHalf)`
  color: #FFD700;
`

const EmptyStar = styled(BsStar)`
  color: #FFD700;
`

export {
  Rate,
  Stars,
  FullStar,
  HalfStar,
  EmptyStar
}