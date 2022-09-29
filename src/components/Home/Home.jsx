import { getPopular } from 'services/MovieAPI';
import { useState, useEffect } from 'react';
import { List, Item, Poster } from './Home.styled';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [popular, setPopular] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const getHomePageData = () => {
      getPopular()
        .then(response => {
          setPopular(() => response.data);
          console.log(response);
        })
        .catch(err => console.log(err))
        .finally(setIsLoading(false));
    };
    getHomePageData();
  }, []);

  return (
    <main>
      {isLoading && <div>LOADING</div>}
      <List>
        {popular &&
          popular.results.map(movie => {
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
    </main>
  );
};

export default Home;
