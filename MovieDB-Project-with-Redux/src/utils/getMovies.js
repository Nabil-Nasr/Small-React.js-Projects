import axios from "axios";
import { setMoviesData } from "../redux/actions/movieActions";

const getMovies = async ({ dispatch, signal, lang = "ar", category = "popular", page: currentPage = 1, apiKey = process.env.REACT_APP_API_KEY, query = "", moviesPerPage = 60 } = {}) => {

  // Number of movies per request is 20
  const numberOfRequests = Math.ceil(moviesPerPage / 20);

  let moviesData = { results: [] };

  let url;
  if (query) {
    url = `https://api.themoviedb.org/3/search/movie`;
  } else {
    url = `https://api.themoviedb.org/3/movie/${category}`;
  }

  for (let page = currentPage * numberOfRequests - numberOfRequests + 1; page <= currentPage * numberOfRequests; page++) {
    let response = { data: moviesData };
    try {
      response = await axios.get(url, { signal, params: { api_key: apiKey, language: lang, query, page } });
    } catch (error) {
      if (error.message === "canceled") {
        return;
      }
    }
    const { data: { page: currentPage, results, total_pages, total_results } } = response;

    moviesData.results = moviesData.results.concat(results);

    moviesData.page = Math.ceil(currentPage / numberOfRequests);
    moviesData.total_pages = Math.ceil(total_pages / numberOfRequests);
    moviesData.total_results = total_results;

  }

  const realTotalPages = Math.floor(500 / numberOfRequests);
  if (moviesData.total_pages > realTotalPages) {
    moviesData.total_pages = realTotalPages;
  }

  // Solving the problem of movie recurrence which is making key recurrence in MovieCard component
  // which is caused because of the increasing of movies per page trick
  if (moviesPerPage > 20) {
    moviesData.results = moviesData.results.filter((movie, index, array) => {
      // Searching for the recurred movie by it's id
      for (const item of array.slice(index + 1)) {
        if (movie.id == item.id) {
          return false;
        }
      }
      return true;
    });
  }
  dispatch(setMoviesData(moviesData));
};

export default getMovies;