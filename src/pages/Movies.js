import { useEffect, useState } from 'react';
import ApiMovies from '../services/Api-Movies';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import css from '../components/MoviesGallery.module.css';
import MoviesList from '../components/MoviesList';

const Movies = () => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query) {
      ApiMovies.movies(query)
        .then(({ results }) => {
          setMovies(results);
        })
        .catch(error => {
          setError(error);
        });
    }
  }, [searchParams]);

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    } else {
      setMovies([]);
    }
  };

  return (
    <div className={css.Container}>
      {error && <h1>{error.message}</h1>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter the movie title"
          className={css.Input}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className={css.Button} type="submit">
          Search
        </button>
      </form>

      {/* <ul className={css.MovieGallery}>
        {movies.map(movie => (
          <li key={movie.id} className={css.MovieItem}>
            <Link
              classNmae={css.MovieItemLink}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul> */}

      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
