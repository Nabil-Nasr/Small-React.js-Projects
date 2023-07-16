import axios from "axios";

const getMovieDetails = async ({ setMovieDetails, movieId,lang = "ar", apiKey = process.env.REACT_APP_API_KEY } = {}) => {

    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${lang}`;

    const { data:movieDetails } = await axios.get(url);


  setMovieDetails(movieDetails);
};

export default getMovieDetails;