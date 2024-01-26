import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from '../components/MoviesGallery.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.MovieGallery}>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          className={css.MovieItemLink}
          state={{ from: location }}
        >
          <li className={css.MovieItem}>{movie.original_title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
