import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import { lazy } from 'react';
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// const Movies = lazy(() => import('./Movies/Movies'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
};
// "name": "goit-react-hw-05-movies",
// "homepage": "https://skazzp.github.io/goit-react-hw-05-movies/",
