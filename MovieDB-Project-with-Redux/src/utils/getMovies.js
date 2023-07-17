import axios from "axios";
import { setMoviesData } from "../redux/actions/movieActions";

const getMovies = async ({ dispatch, lang = "ar", category = "popular", page: currentPage = 1, apiKey = process.env.REACT_APP_API_KEY, query = "", moviesPerPage = 35 } = {}) => {

  // Number of movies per request is 20
  const numberOfRequests = Math.ceil(moviesPerPage / 20);

  let moviesData = { results: [] };

  for (let page = currentPage * numberOfRequests - numberOfRequests + 1; page <= currentPage * numberOfRequests; page++) {

    let url;
    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=${lang}&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=${lang}&page=${page}`;
    }

    const { data: { page: currentPage, results, total_pages, total_results } } = await axios.get(url);

    moviesData.results = moviesData.results.concat(results);

    moviesData.page = Math.ceil(currentPage / numberOfRequests);
    moviesData.total_pages = Math.ceil(total_pages / numberOfRequests);
    moviesData.total_results = total_results;
    
  }

  if (moviesData.total_pages > Math.floor(500 / numberOfRequests)) {
    moviesData.total_pages = Math.floor(500 / numberOfRequests);
  }

  dispatch(setMoviesData(moviesData));
  console.log(moviesData)
};

export default getMovies;