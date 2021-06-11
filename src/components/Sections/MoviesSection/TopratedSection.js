import React, { useEffect } from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getTopRatedMovies } from '../../../redux/actions/movieActions'

//Components
import MovieCard from '../../MovieCard'

//Styled components
import { SectionCards, SectionContainer, SectionTitle } from './MoviesElements'

const TopratedSection = ({sectionTitle, isTrending}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTopRatedMovies())
  },[dispatch])

  //State
  const topRatedMovies = useSelector(state => state.topRatedMovies)
  const { loading, error, topRated } = topRatedMovies
  return (
    <SectionContainer>
      <SectionTitle>{sectionTitle}</SectionTitle>
      {
        loading ? (<h2>Loading....</h2>) : error ? (<h2>{error}</h2>) :(
          <SectionCards>
            { topRated.map(result => (
              <MovieCard isTrending={isTrending} key={result} result={result}/>
            ))}
          </SectionCards>
        )
      }
      
    </SectionContainer>
  )
}

export default TopratedSection
