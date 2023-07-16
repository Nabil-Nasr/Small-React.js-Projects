import { Col } from "react-bootstrap";
import "../css/card.css";
import { Link } from "react-router-dom";
import posterNotAvailable from "../images/poster-not-found.jpg"


const MovieCard = ({movie={}}) => {
  let imgPath;
  if(movie.poster_path){
    imgPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  }else {
    imgPath = posterNotAvailable
  }

  return (
    <Col xs="4"  md="3"  xl="2"  className="p-2">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img src={imgPath} alt={movie.original_title} className="w-100 " />
          <div className="overlay text-center">
            <p>إسم الفيلم : {movie.original_title}</p>
            <p>تاريخ الإصدار : <span dir="ltr">{movie.release_date || "غير متاح"}</span></p>
            <p>عدد المقيمين : {movie.vote_count}</p>
            <p>التقييم : {movie.vote_average}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default MovieCard;
