import axios from '../../axios'
import { 
  ACTION_MOVIES_FAIL,
  ACTION_MOVIES_REQUEST,
  ACTION_MOVIES_SUCCESS,
  COMEDY_MOVIES_FAIL,
  COMEDY_MOVIES_REQUEST,
  COMEDY_MOVIES_SUCCESS,
  ROMANCE_MOVIES_FAIL,
  ROMANCE_MOVIES_REQUEST,
  ROMANCE_MOVIES_SUCCESS,
  TOPRATED_MOVIES_FAIL,
  TOPRATED_MOVIES_REQUEST,
  TOPRATED_MOVIES_SUCCESS,
  TRENDING_MOVIES_FAIL, 
  TRENDING_MOVIES_REQUEST, 
  TRENDING_MOVIES_SUCCESS,
  HERO_MOVIE_REQUEST,
  HERO_MOVIE_SUCCESS,
  HERO_MOVIE_FAIL
} from '../types'

import { request } from '../../request'

//Get banner movie
export const getHeroMovie = () => async dispatch =>{
  try{
    dispatch({ type: HERO_MOVIE_REQUEST })

    const { data } = await axios.get(request.fetchTrending)

    const singleMovie = data.results[
      Math.floor(Math.random() * data.results.length - 1)
    ]

    dispatch({
      type: HERO_MOVIE_SUCCESS,
      payload: singleMovie
    })

  } catch(error){
    dispatch({
      type: HERO_MOVIE_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}

//Get Movies request
//Get trending movies
export const getTrendingMovies = () => async(dispatch)=>{
  try{
    dispatch({type: TRENDING_MOVIES_REQUEST})

    const { data } = await axios.get(request.fetchTrending)

    dispatch({
      type: TRENDING_MOVIES_SUCCESS, 
      payload: data.results
    })
    console.log(data.results)

  }catch(error){
    dispatch({
      type: TRENDING_MOVIES_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}

//Get top rated movies
export const getTopRatedMovies = () => async(dispatch)=>{
  try{
    dispatch({type: TOPRATED_MOVIES_REQUEST})

    const { data } = await axios.get(request.fetchTopRated)
    dispatch({
      type: TOPRATED_MOVIES_SUCCESS, 
      payload: data.results
    })
  }catch(error){
    dispatch({
      type: TOPRATED_MOVIES_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}

//Get action movies
export const getActionMovies = () => async(dispatch)=>{
  try{
    dispatch({type: ACTION_MOVIES_REQUEST})

    const { data } = await axios.get(request.fetchActionMovies)
    dispatch({
      type: ACTION_MOVIES_SUCCESS, 
      payload: data.results
    })
  }catch(error){
    dispatch({
      type: ACTION_MOVIES_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}

//Get comedy movies
export const getComedyMovies = () => async(dispatch)=>{
  try{
    dispatch({type: COMEDY_MOVIES_REQUEST})

    const { data } = await axios.get(request.fetchComedyMovies)
    dispatch({
      type: COMEDY_MOVIES_SUCCESS, 
      payload: data.results
    })
  }catch(error){
    dispatch({
      type: COMEDY_MOVIES_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}

//Get romance movies
export const getRomanceMovies = () => async(dispatch)=>{
  try{
    dispatch({type: ROMANCE_MOVIES_REQUEST})

    const { data } = await axios.get(request.fetchRomanceMovies)
    dispatch({
      type: ROMANCE_MOVIES_SUCCESS, 
      payload: data.results
    })
  }catch(error){
    dispatch({
      type: ROMANCE_MOVIES_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}