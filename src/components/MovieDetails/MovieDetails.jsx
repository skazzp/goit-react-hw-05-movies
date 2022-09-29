import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/MovieAPI';
import {
  Poster,
  Container,
  MoreInfo,
  LinkBtn,
  BackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getData = () => {
      getMovieById(movieId)
        .then(response => setDetails(() => response.data))
        .catch(err => console.log(err))
        .finally(setIsLoading(false));
    };
    getData();
  }, [movieId]);

  return (
    <main>
      {isLoading && <div>IS LOADING</div>}
      <BackLink to={backLinkHref}>Go back</BackLink>
      {details && (
        <Container>
          <div>
            <Poster
              src={'https://image.tmdb.org/t/p/w500' + details.poster_path}
              alt={'Poster of "' + details.title + '" movie'}
            />
          </div>
          <div>
            <h1>{details.title}</h1>
            <p>Rating: {details.vote_average}</p>
            <h2>Overview</h2>
            <p>{details.overview}</p>
            <h3>Genres</h3>
            <p>{details.genres.map(elem => elem.name).join(', ')}</p>
          </div>
        </Container>
      )}
      <MoreInfo>
        <div>
          <LinkBtn to={'cast'} state={{ from: location.state?.from }}>
            Cast
          </LinkBtn>
          <LinkBtn to={'reviews'} state={{ from: location.state?.from }}>
            Reviews
          </LinkBtn>
        </div>
        <Suspense fallback={<div>LOADING !</div>}>
          <Outlet />
        </Suspense>
      </MoreInfo>
    </main>
  );
};

export default MovieDetails;
