import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/MovieAPI';
import { List, Item, Poster } from './Movies.styled';

const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? '1';
  const location = useLocation();

  const handleSearch = input => {
    setInput(input);
  };
  useEffect(() => {
    if (!input) return;
    const getData = () => {
      searchMovies(input, page).then(response => {
        // console.log(response);
        setMovies(response.data);
      });
    };
    getData();
  }, [input, page]);
  useEffect(() => {
    setInput(query);
  }, [query]);
  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <List>
        {movies && movies.results.length === 0 && <div>No results</div>}
        {movies &&
          movies.results.map(movie => {
            const { id, title, poster_path } = movie;
            return (
              <Item key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <h2>{title}</h2>
                  <Poster
                    src={'https://image.tmdb.org/t/p/w500' + poster_path}
                    alt={'Poster of "' + title + '" movie'}
                  />
                </Link>
              </Item>
            );
          })}
      </List>
    </div>
  );
};

export default Movies;
