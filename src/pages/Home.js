import { useEffect, useState } from 'react';
import Api from '../services/Api';
import css from '../components/MoviesGallery.module.css';
import MoviesList from '../components/MoviesList';

const Home = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    Api.fetchMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <div className={css.Container}>
      {error && <h1>{error.message}</h1>}
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
