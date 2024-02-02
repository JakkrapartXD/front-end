import React from "react";
import "../css/moviecard.css";

const MovieCard = (props) => {
  const API_IMG = "http://api.se-rmutl.net/api/images/";

  return (
    <div className="card movie_card">
      <img
        src={API_IMG + props.Image_name}
        alt={`Movie poster for ${props.title}`}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.genre}</p>
        <p className="card-text">{props.director}</p>
        <p className="card-text float-end">{props.release_year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
