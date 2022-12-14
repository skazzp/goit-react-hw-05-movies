import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/MovieAPI';
import {
  List,
  Item,
  // Avatar,
  User,
  Text,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getData = () => {
      getReviews(movieId)
        .then(response => {
          // console.log(response);
          setReviews(() => response.data.results);
        })
        .catch(err => console.log(err))
        .finally(setIsLoading(false));
    };
    getData();
  }, [movieId, isLoading]);

  return (
    <List>
      {reviews && reviews.length ? (
        reviews.map(review => {
          const {
            author,
            // author_details,
            content,
            created_at,
            id,
          } = review;
          const date = new Date(created_at);
          const created = date.toLocaleString();
          let text = content;
          // content.split(' ').length > 50
          //   ? content.split(' ').slice(0, 50).join(' ')
          //   : content;
          // console.log(content);
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
              <Text>{text}</Text>
            </Item>
          );
        })
      ) : (
        <h2>No reviews avaliable</h2>
      )}
    </List>
  );
};

export default Reviews;
