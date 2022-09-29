import axios from 'axios';

const API_KEY = '3843a9873b3ac5149ba48e5287e730a6';

export const getPopular = page => {
  const config = {
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: {
      api_key: API_KEY,
      page: page,
    },
  };
  const response = axios(config).then(data => data);
  return response;
};

export const getMovieById = id => {
  const config = {
    url: id,
    baseURL: 'https://api.themoviedb.org/3/movie/',
    params: {
      api_key: API_KEY,
    },
  };
  const response = axios(config).then(data => data);
  return response;
};

export const getCast = id => {
  const config = {
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: {
      api_key: API_KEY,
      page: 1,
    },
  };
  const response = axios(config).then(data => data);
  return response;
};

export const getReviews = id => {
  const config = {
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: {
      api_key: API_KEY,
      page: 1,
    },
  };
  const response = axios(config).then(data => data);
  return response;
};

export const searchMovies = (query, page) => {
  const config = {
    url: `https://api.themoviedb.org/3/search/movie`,
    params: {
      api_key: API_KEY,
      query: query,
      page: page,
    },
  };
  const response = axios(config).then(data => data);
  return response;
};
