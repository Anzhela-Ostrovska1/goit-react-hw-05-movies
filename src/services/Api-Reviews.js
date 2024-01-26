function review(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=f71c5261a9fba20ceeb62f41ed4cce9c`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }

    return Promise.reject(new Error('There are no movies'));
  });
}

const apiReview = {
  review,
};
export default apiReview;
