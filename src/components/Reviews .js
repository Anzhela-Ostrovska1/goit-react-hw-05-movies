import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiReview from '../services/Api-Reviews';
import css from '../components/MoviesGallery.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    ApiReview.review(movieId)
      .then(resp => {
        setReviews(resp);
      })
      .catch(error => {
        setError(error);
      });
  }, [movieId]);

  return (
    <div>
      {error && <h1>{error.message}</h1>}
      {reviews && reviews.results && reviews.results.length > 0 ? (
        reviews.results.map(review => (
          <div className={css.ReviewsContainer} key={review.id}>
            <p>
              <span className={css.ReviewsAuthor}>Author:</span> {review.author}
            </p>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
