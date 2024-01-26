import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './MoviesGallery.module.css';

export const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.Layout}>
          <li>
            <NavLink to="/" className={css.ActiveLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.ActiveLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
