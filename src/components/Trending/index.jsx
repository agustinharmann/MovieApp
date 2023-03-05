import { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/userProvider';
import { MapMovies } from '../MapMovies';
import './styles.css';

const Trending = () => {

  const { movies, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <div className='trending'>
      <div className='header--genre'>
        <Link to={'/'} className='arrow_at_home--movie'>
          <IoIosArrowBack className='icon_arrow--movie' />
        </Link>
        <div className='title--trending'>
          Trendings
        </div>
        <div className='disable_icon--genre'></div>
      </div>
      <div className='movies--trending'>
        {movies && <MapMovies
          mapeable={movies}
        />}
      </div>

    </div>
  );
};

export { Trending };
