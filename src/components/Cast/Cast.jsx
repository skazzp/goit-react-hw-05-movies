import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/MovieAPI';
import { List, Item, Photo, Title, Text } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getData = () => {
      getCast(movieId)
        .then(response => setCast(() => response.data.cast))
        .catch(err => console.log(err))
        .finally(setIsLoading(false));
    };
    getData();
  }, [movieId, isLoading]);

  return (
    <List>
      {cast &&
        cast.map(elem => {
          const { id, name, profile_path, character } = elem;
          return (
            <Item key={id}>
              <Photo
                src={'https://image.tmdb.org/t/p/w500' + profile_path}
                alt={name}
              />
              <Title>Name:</Title>
              <Text>{name}</Text>
              <Title>Character:</Title>
              <Text>{character}</Text>
            </Item>
          );
        })}
    </List>
  );
};

export default Cast;
