import axios from "axios";

const getMovieDetails = async ({ signal, movieId, lang = "ar", apiKey = process.env.REACT_APP_API_KEY } = {}) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  let response = { data: {} };
  try {
    response = await axios.get(url, { signal, params: { api_key: apiKey, language: lang } });
  } catch (error) {
    if (error.message === "canceled") {
      return {};
    }
  }
  const { data: movieDetails } = response;

  return movieDetails;
};

export default getMovieDetails;