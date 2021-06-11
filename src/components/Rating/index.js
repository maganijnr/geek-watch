import React from 'react'

import {
  Rate,
  Stars,
  FullStar,
  HalfStar,
  EmptyStar
} from './RatingElements'

const Rating = ({ value }) => {
  const rate = (value/10) * 5
  return (
    <Rate>
      <h3>{value}</h3>
      <Stars>
        {rate >= 1 ? <FullStar/>: rate >= 0.5 ? <HalfStar/>: <EmptyStar/>}
        {rate >= 2 ? <FullStar/>: rate >= 1.5 ? <HalfStar/>: <EmptyStar/>}
        {rate >= 3 ? <FullStar/>: rate >= 2.5 ? <HalfStar/>: <EmptyStar/>}
        {rate >= 4 ? <FullStar/>: rate >= 3.5 ? <HalfStar/>: <EmptyStar/>}
        {rate >= 5 ? <FullStar/>: rate >= 4.5 ? <HalfStar/>: <EmptyStar/>}
      </Stars>
    </Rate>
  )
}

export default Rating
