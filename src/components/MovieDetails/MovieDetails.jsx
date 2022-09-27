import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/MovieAPI';
import { Poster, Container, MoreInfo, Link } from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
          <Link to={'cast'}>Cast</Link>
          <Link to={'reviews'}>Reviews</Link>
        </div>
        <Outlet />
      </MoreInfo>
    </main>
  );
};

export default MovieDetails;
