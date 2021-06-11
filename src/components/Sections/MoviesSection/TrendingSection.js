import React, { useEffect } from 'react'
import MovieCard from '../../MovieCard'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies } from '../../../redux/actions/movieActions'

//Styled components
import {
  SectionContainer,
  SectionTitle,
  SectionCards
} from './MoviesElements'

const TrendingSection = ({sectionTitle, isTrending}) => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getTrendingMovies())
  },[dispatch])

  const trendingMovies = useSelector((state) => state.trendingMovies)

  const { loading, error, trendings } = trendingMovies


  return (
    <SectionContainer>
      <SectionTitle>{sectionTitle}</SectionTitle>
      {
        loading ? (<h2>Loading....</h2>) : error ? (<h2>{error}</h2>) :(
          <SectionCards>
            { trendings.map(result => (
              <MovieCard isTrending={isTrending} key={result} result={result}/>
            ))}
          </SectionCards>
        )
      }
      
    </SectionContainer>
  )
}

export default TrendingSection
