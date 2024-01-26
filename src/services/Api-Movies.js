function movies(name) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1&api_key=f71c5261a9fba20ceeb62f41ed4cce9c`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }

    return Promise.reject(new Error('There are no movies'));
  });
}

const apiMovies = {
  movies,
};
export default apiMovies;
