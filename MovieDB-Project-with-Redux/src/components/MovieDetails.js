import { Button, Col, Row } from "react-bootstrap";
import "../css/movie-details.css"
import posterNotAvailable from "../images/poster-not-found.jpg"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getMovieDetails from "../utils/getMovieDetails";

const MovieDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  
  const [movieDetails,setMovieDetails] = useState({})
  
  useEffect(()=>{
    getMovieDetails({movieId:id,setMovieDetails,})
  },[])

  let imgPath;
  if(movieDetails.poster_path){
    imgPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
  }else {
    imgPath = posterNotAvailable
  }

  return (
    <>
      <Row className="bg-body-tertiary rounded-4 my-4 mx-0">
        <Col xs="12"  md="5">
          <img src={imgPath} alt={movieDetails.original_title} className="poster my-2 rounded-3"/>
        </Col>

        <Col xs="12"  md="7" className="py-2 px-4 fs-5">
          <div className="d-flex flex-column align-items-center text-center  text-md-start  align-items-md-start justify-content-center h-100 ">
          <p className="border-bottom">إسم الفيلم : {movieDetails.original_title}</p>
          <p className="border-bottom">التصنيف : {movieDetails.genres?.map(genre=>`${genre.name}`).join(" , ")||"غير متاح"}</p>
            <p className="border-bottom">تاريخ الإصدار : <span dir="ltr">{movieDetails.release_date || "غير متاح"}</span></p>
            <p className="border-bottom">عدد المقيمين : {movieDetails.vote_count}</p>
            <p className="border-bottom">التقييم : {movieDetails.vote_average}</p>
          </div>
        </Col>
      </Row>

      <Row className="bg-body-tertiary rounded-4 my-4 mx-0 p-2">
        <Col sm="12">
          <h2 className="border-bottom ">القصة :</h2>
          <p>{movieDetails.overview || "غير متاح ....."}</p>
        </Col>
      </Row>

      <Row className="bg-body-tertiary rounded-4 my-4 mx-0 p-2">
        <Col sm="12" className="d-flex gap-2 justify-content-center ">
          <Button onClick={()=>navigate(-1)} className="bg-custom-brown border-danger" variant="danger">عودة للسابقة</Button>
          {/* null href for disabling the a tag */}
          <a href={movieDetails.homepage || null} target="_blank" rel="noreferrer"><Button className={`bg-custom-brown ${movieDetails.homepage?"":"disabled"}`} variant="danger">موقع الفيلم</Button></a>
        </Col>
      </Row>
    </>
  );
}

export default MovieDetails;
