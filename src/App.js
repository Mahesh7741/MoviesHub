import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MoviesPoster from "./components/MoviePoster";
//API  f233c1cf

const API_URL = "http://www.omdbapi.com?apikey=f233c1cf";

function App() {
  const [movies, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const respones = await fetch(`${API_URL}&s=${title}`);
    const data = await respones.json();
    setMovie(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Hub</h1>
      <div className="search">
        <input
          value={searchTerm}
          placeholder="Search Movie..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search Movie Icon"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MoviesPoster movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
