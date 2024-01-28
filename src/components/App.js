import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './Layout';

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Reviews = lazy(() => import('./Reviews '));
const Cast = lazy(() => import('./Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />;
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
