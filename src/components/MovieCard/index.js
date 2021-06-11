import React from 'react'

import { useHistory } from 'react-router-dom'

import {
  CardImage, 
} from './MovieCardElements'

const baseUrl = "https://image.tmdb.org/t/p/original/"

const MovieCard = ({result, isTrending}) => {
  let history = useHistory()
  
  return (
    <CardImage 
      src={isTrending ? `${baseUrl}${result.poster_path}`: `${baseUrl}${result.backdrop_path}`}
      onClick={() => history.push(`/movie/${result.id}`)} 
      alt="img"/>
  )
}

export default MovieCard
