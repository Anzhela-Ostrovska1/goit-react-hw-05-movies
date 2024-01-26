import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import css from '../components/MoviesGallery.module.css';

import ApiInfo from '../services/Api-MovieInfo';

const MoviesDetails = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    ApiInfo.movieInfo(movieId)

      .then(resp => {
        setMovie(resp);
      })

      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <Link to={backLinkLocation.current} className={css.ButtonBack}>
        Go back
      </Link>
      <div className={css.MovieInfoContainer}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />

        <div className={css.MovieInfo}>
          <h2>{movie.original_title}</h2>
          <p>User Score: {Math.round((movie.vote_average / 10) * 100)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          {movie.genres ? (
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          ) : (
            <p>{movie.genres}</p>
          )}
        </div>
      </div>

      <div className={css.Container}>
        <h3>Additional information </h3>
        <ul>
          <li>
            <Link className={css.CastAndReviews} key={movieId} to="cast">
              <p>Cast</p>
            </Link>
          </li>

          <li>
            <Link className={css.CastAndReviews} key={movieId} to="reviews">
              <p>Reviews</p>
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
