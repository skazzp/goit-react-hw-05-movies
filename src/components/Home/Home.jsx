import { getPopular } from 'services/MovieAPI';
import { useState, useEffect } from 'react';
import { List, Item, Poster } from './Home.styled';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const Home = () => {
  const [popular, setPopular] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const updatePage = p => {
    if (p === page) return;
    setSearchParams({
      page: p,
    });
    //   setCurrentPage(p);
    //   const to = countPerPage * p;
    //   const from = to - countPerPage;
    //   setCollection(cloneDeep(allData.slice(from, to)));
  };
  useEffect(() => {
    setIsLoading(true);
    const getHomePageData = () => {
      getPopular(page)
        .then(response => {
          setPopular(() => response.data);
          setTotalPages(() => response.data.total_pages);
          console.log(response.data);
        })
        .catch(err => console.log(err))
        .finally(setIsLoading(false));
    };
    getHomePageData();
  }, [page]);
  // useEffect(() => {}, [totalPages]);
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
      <Pagination
        onChange={updatePage}
        current={page}
        total={totalPages}
        showLessItems={true}
      />
    </main>
  );
};

export default Home;
