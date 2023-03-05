import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/userProvider';
import { MapMovies } from '../MapMovies';
import './styles.css';

const Genres = () => {

  const { loading, getCategory, genreMovies } = useContext(UserContext);
  let { state } = useLocation();

  useEffect( () => {
    getCategory(state.some);
  }, [getCategory, state.some] );
  
  const { results } = genreMovies;
  // console.log(results);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='genre'>
      <div className='header--genre'>
        <Link to={'/'} className='arrow_at_home--movie'>
          <IoIosArrowBack className='icon_arrow--movie' />
        </Link>
        <div className='title--genre'>
          nombre del genre
        </div>
        <div className='disable_icon--genre'></div>
      </div>
      <div className='movies--genre'>
      { results && <MapMovies
        mapeable={results}
      />}
    </div>
    </div>
  );
};

export { Genres };
