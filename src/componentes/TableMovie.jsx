import React from "react";

const TableMovie = ({ movieList }) => {
  const posterURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
          <p className="release-date">Fecha de estreno: {movie.release_date}</p>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default TableMovie;
