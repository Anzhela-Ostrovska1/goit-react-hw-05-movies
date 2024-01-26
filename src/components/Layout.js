import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './MoviesGallery.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(255, 106, 0);
  }
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.Layout}>
          <li>
            <StyledLink to="/" className={css.ActiveLink}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies" className={css.ActiveLink}>
              Movies
            </StyledLink>
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
