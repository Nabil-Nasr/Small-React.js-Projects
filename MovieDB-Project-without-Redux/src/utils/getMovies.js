import axios from "axios";

const getMovies = async ({ lang = "ar", category = "popular", page: currentPage = 1, apiKey = process.env.REACT_APP_API_KEY, query = "", moviesPerPage = 80 } = {}) => {

  // Number of movies per request is 20
  const numberOfRequests = Math.ceil(moviesPerPage / 20);

  let moviesData = { results: [] };

  for (let page = currentPage * numberOfRequests - numberOfRequests + 1; page <= currentPage * numberOfRequests; page++) {

    let url;
    if (query) {
      url = `https://api.themoviedb.org/3/search/movie`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${category}`;
    }

    const { data: { page: currentPage, results, total_pages, total_results } } = await axios.get(url,{params:{api_key:apiKey,language:lang,query,page}});

    moviesData.results = moviesData.results.concat(results);

    moviesData.page = Math.ceil(currentPage / numberOfRequests);
    moviesData.total_pages = Math.ceil(total_pages / numberOfRequests);
    moviesData.total_results = total_results;
    
  }
  const realTotalPages = Math.floor(500 / numberOfRequests);
  if (moviesData.total_pages > realTotalPages) {
    moviesData.total_pages = realTotalPages;
  }

  return moviesData
};

export default getMovies;