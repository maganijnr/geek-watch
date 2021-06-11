const API_KEY = "9b57b4d2c11e60e4712e03ecd32fabf4"

export const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=89`,
  fetchTrendingMovie: `/trending/all/week?api_key=${API_KEY}&language=en-US/${460465}`
}

//API request
// https://api.themoviedb.org/3/movie/550?api_key=9b57b4d2c11e60e4712e03ecd32fabf4