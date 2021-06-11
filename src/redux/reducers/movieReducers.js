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
  HERO_MOVIE_SUCCESS,
  HERO_MOVIE_REQUEST,
  HERO_MOVIE_FAIL
} from '../types'

//Hero movie reducer
export const heroMovieReducer = ( state = { heroMovie:{} }, action) =>{
  switch(action.type){
    case HERO_MOVIE_REQUEST:
      return{
        loading: true,
        heroMovie: {}
      }
    case HERO_MOVIE_SUCCESS:
      return{
        loading: false,
        heroMovie: action.payload
      }
    case HERO_MOVIE_FAIL:
      return{
        loading: false,
        heroMovie: {},
        error: action.payload
      }
    default:
      return state
  }
}
//TRENDING MOVIES REDUCER
export const trendingMoviesReducer = (state = { trendings:[] }, action ) =>{
  switch(action.type){
    case TRENDING_MOVIES_REQUEST:
      return{
        loading: true,
        trendings:[]
      }
    case TRENDING_MOVIES_SUCCESS:
      return{
        loading: false,
        trendings: action.payload
      }
    case TRENDING_MOVIES_FAIL:
      return{
        loading: false,
        trendings:[],
        error: action.payload
      }
    default:
      return state
  }
}

//TOP RATED MOVIES REDUCER
export const topRatedMoviesReducer = (state={topRated:[]}, action) =>{
  switch(action.type){
    case TOPRATED_MOVIES_REQUEST:
      return{
        loading: true,
        topRated: []
      }
    case TOPRATED_MOVIES_SUCCESS:
      return{
        loading: false,
        topRated: action.payload
      }
    case TOPRATED_MOVIES_FAIL:
      return{
        loading: false,
        topRated:[],
        error: action.payload
      }
    default:
      return state
  }
}

//ACTION MOVIES REDUCER
export const actionMoviesReducer = (state={actions:[]}, action) =>{
  switch(action){
    case ACTION_MOVIES_REQUEST:
      return{
        loading: true,
        actions:[]
      }
    case ACTION_MOVIES_SUCCESS:
      return{
        loading: false,
        actions: action.payload
      }
    case ACTION_MOVIES_FAIL:
      return{
        loading: false,
        actions:[],
        error: action.payload
      }
    default:
      return state
  }
}

//COMEDY MOVIES REDUCER
export const comedyMoviesReducer = (state={comedies:[]}, action) =>{
  switch(action.type){
    case COMEDY_MOVIES_REQUEST:
      return{
        loading: true,
        comedies: []
      }
    case COMEDY_MOVIES_SUCCESS:
      return{
        loading: false,
        comedies: action.payload
      }
    case COMEDY_MOVIES_FAIL:
      return{
        loading: false,
        comedies:[],
        error: action.payload
      }
    default:
      return state
  }
}

//ROMANCE MOVIES REDUCER
export const romanceMoviesReducer = (state={romances:[]}, action) =>{
  switch(action.type){
    case ROMANCE_MOVIES_REQUEST:
      return{
        loading: true,
        romances: []
      }
    case ROMANCE_MOVIES_SUCCESS:
      return{
        loading: false,
        romances: action.payload
      }
    case ROMANCE_MOVIES_FAIL:
      return{
        loading: false,
        romances:[],
        error: action.payload
      }
    default:
      return state
  }
}
