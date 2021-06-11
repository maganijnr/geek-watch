import React, { useEffect } from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getRomanceMovies } from '../../../redux/actions/movieActions'

//Components
import MovieCard from '../../MovieCard'

//Styled components
import { SectionCards, SectionContainer, SectionTitle } from './MoviesElements'

const RomanceSection = ({ sectionTitle, isTrending }) => {
  const dispacth = useDispatch()
  useEffect(() =>{
    dispacth(getRomanceMovies())
  },[dispacth])

  //state
  const romanceMovies = useSelector( state => state.romanceMovies )
  const { loading, error, romances} = romanceMovies

  return (
    <SectionContainer>
      <SectionTitle>{sectionTitle}</SectionTitle>
      {
        loading ? (<h2>Loading....</h2>) : error ? (<h2>{error}</h2>) :(
          <SectionCards>
            { romances.map(result => (
              <MovieCard isTrending={isTrending} key={result} result={result}/>
            ))}
          </SectionCards>
        )
      }
      
    </SectionContainer>
  )
}

export default RomanceSection
