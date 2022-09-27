import { Link, Header } from './Navigation.styled';

const Navigation = () => {
  return (
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};

export default Navigation;
