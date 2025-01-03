import { useState } from "react";
import TableMovie from "./TableMovie";

const Searcher = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);

  const baseURL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "6c57c00935fc8a7d1abbfd6ba5dc965d";

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${baseURL}?query=${search}&api_key=${API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setMovieList(data.results);
    } catch (error) {
      console.log("Error al traer las peliculas");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca una Película"
          value={search}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>
      {movieList && <TableMovie movieList={movieList} />}
    </>
  );
};

export default Searcher;
