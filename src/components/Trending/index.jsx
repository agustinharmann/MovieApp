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
    <div className='trending d-flex justify-content-center flex-column'>
      <div className='header--trending d-flex align-items-center justify-content-between'>
        <Link to={'/'} className='arrow_at_home--trending d-flex justify-content-center align-items-center'>
          <IoIosArrowBack className='icon_arrow--trending fs-1' />
        </Link>
        <div className='title--trending fs-2 d-flex align-items-center'>
          Trendings
        </div>
        <div className='disable_icon--trending'></div>
      </div>
      <div className='movies--trending d-flex justify-content-center flex-wrap'>
        {movies && <MapMovies
          mapeable={movies}
        />}
      </div>

    </div>
  );
};

export { Trending };
