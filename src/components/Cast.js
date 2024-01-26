import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiCast from '../services/Api-Cast';
import css from '../components/MoviesGallery.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    ApiCast.cast(movieId)

      .then(resp => {
        setCast(resp);
      })

      .catch(error => {
        setError(error);
      });
  }, [movieId]);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <div>
      {error && <h1>{error.message}</h1>}

      {cast &&
        cast.cast &&
        cast.cast.map(actor => (
          <div className={css.CastContainer} key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImg
              }
              width={150}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>
              <span className={css.CastCharacter}>Character:</span>{' '}
              {actor.character}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Cast;
