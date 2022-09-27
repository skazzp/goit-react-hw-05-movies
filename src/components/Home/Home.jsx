import { getPopular } from 'services/MovieAPI';
import { useState, useEffect } from 'react';
import { List, Item, Poster } from './Home.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getHomePageData = () => {
      getPopular()
        .then(response => {
          // console.log(response);
          setPopular(() => response.data.results);
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
          popular.map(movie => {
            const { id, title, poster_path } = movie;
            return (
              <Item key={id}>
                <Link to={`/movies/${id}`}>
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
