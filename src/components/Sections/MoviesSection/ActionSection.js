import React, { useEffect } from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getActionMovies } from '../../../redux/actions/movieActions'

//Components
import MovieCard from '../../MovieCard'

//Styled components
import { SectionCards, SectionContainer, SectionTitle } from './MoviesElements'

const ActionSection = ({ sectionTitle, isTrending }) => {
  const dispacth = useDispatch()
  useEffect(() =>{
    dispacth(getActionMovies())
  },[dispacth])

  //state
  const actionMovies = useSelector( state => state.actionMovies )
  const { loading, error, actions } = actionMovies

  return (
    <SectionContainer>
      <SectionTitle>{sectionTitle}</SectionTitle>
      {
        loading ? (<h2>Loading....</h2>) : error ? (<h2>{error}</h2>) :(
          <SectionCards>
            { actions.map(result => (
              <MovieCard isTrending={isTrending} key={result} result={result}/>
            ))}
          </SectionCards>
        )
      }
      
    </SectionContainer>
  )
}

export default ActionSection
