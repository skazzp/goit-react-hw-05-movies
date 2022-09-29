import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import { lazy } from 'react';
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
// комменты потом почищу, еще буду доделывать
// "name": "goit-react-hw-05-movies",
// "homepage": "https://skazzp.github.io/goit-react-hw-05-movies/",
