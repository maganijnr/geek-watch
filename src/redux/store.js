import { createStore, combineReducers,applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { composeWithDevTools } from 'redux-devtools-extension'

//Reducers
import { 
  trendingMoviesReducer, 
  topRatedMoviesReducer,
  actionMoviesReducer,
  romanceMoviesReducer,
  comedyMoviesReducer ,
  heroMovieReducer
} from './reducers/movieReducers'

const reducers = combineReducers({
  trendingMovies: trendingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  actionMovies: actionMoviesReducer,
  romanceMovies: romanceMoviesReducer,
  comedyMovies: comedyMoviesReducer,
  heroMovie: heroMovieReducer
})

const initialState = {}

const middlewares = [thunk,logger]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store