import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/MovieAPI';
import { List, Item, Avatar, User, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getData = () => {
      getReviews(movieId)
        .then(response => {
          console.log(response);
          setReviews(() => response.data.results);
        })
        .catch(err => console.log(err))
        .finally(setIsLoading(false));
    };
    getData();
  }, [movieId, isLoading]);

  return (
    <List>
      {reviews ? (
        reviews.map(review => {
          const { author, author_details, content, created_at, id } = review;
          const date = new Date(created_at);
          const created = date.toLocaleString();
          return (
            <Item key={id}>
              <User>
                {/* <div>
                  <Avatar
                    src={
                      'https://image.tmdb.org/t/p/w500' +
                      author_details.avatar_path
                    }
                    // src={author_details.avatar_path.slice(1)}
                    alt={author + ' avatar'}
                  />
                </div> */}
                <div>
                  <h3>{author}</h3>
                  <p>{created}</p>
                </div>
              </User>
              <p>{content}</p>
            </Item>
          );
        })
      ) : (
        <p></p>
      )}
    </List>
  );
};

export default Reviews;
