import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { MapMovies } from '../MapMovies';
import './styles.css';

const Trending = () => {

  const { movie, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <div className="trending">
      <MapMovies
        mapeable={movie}
      />
    </div>
  );
};

export { Trending };
