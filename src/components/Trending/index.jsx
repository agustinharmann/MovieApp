import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { MapMovies } from '../MapMovies';
import './styles.css';

const Trending = () => {

  const { movies, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <div className="trending">
      <MapMovies
        mapeable={movies}
      />
    </div>
  );
};

export { Trending };
