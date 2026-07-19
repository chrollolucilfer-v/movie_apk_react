import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "John Wick", release_date: "2020" },
    { id: 3, title: "John Wick", release_date: "2020" },
  ];

  const handleSearch = () => {
    e.preventDefault();
    setSearchQuery("");
  };
  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search For Movies..."
          className="search-input"
          value={searchQuery}
          oncChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="searchu-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
