import React, { useEffect } from 'react'

//REDUX
import { useSelector, useDispatch } from 'react-redux'
import { getHeroMovie } from '../../../redux/actions/movieActions'

import {
  HeroBody, 
  HeroBg,
  Image,
  HeroContent,
  HeroH2,
  HeroP,
  HeroBtn,
} from './HeroElements'

//components
import Rating from '../../Rating'


const baseUrl = "https://image.tmdb.org/t/p/original/"

const HeroSection = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHeroMovie())
  },[dispatch])

  //State
  const heroMovie = useSelector(state => state.heroMovie)
  const { heroMovie:{
    name,
    original_name,
    title,
    vote_average,
    media_type,
    overview,
    backdrop_path,
    poster_path
  }} = heroMovie;

  const truncate = (str, n) =>{
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  }


  return (
    <HeroBody>
      <HeroBg>
        <Image src={`${baseUrl}${backdrop_path}` || `${baseUrl}${poster_path}`} alt="img"/>
      </HeroBg>
      <HeroContent>
        <HeroH2>{name || original_name || title}</HeroH2>
        <HeroBtn>Watch Trailer</HeroBtn>
        <HeroP>{truncate(overview, 150)}</HeroP>
        <Rating value={vote_average} />
      </HeroContent>
    </HeroBody>
  )
}

export default HeroSection
