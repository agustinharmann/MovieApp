import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { Link } from 'react-router-dom';
import { MapMovies } from '../MapMovies';
import { MapGenres } from '../MapGenres';
import './styles.css';

const Home = () => {

  const { movies, genres, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='home'>
      <div className="d-flex justify-content-between align-items-center w-100 mt-4">
        <div className='title_trendings--home'>Trendings</div>
        <button className='btn_trending--home btn btn-primary'>
          <Link className='text_btn-trending--home' to={'/Trending'}>
            View more
          </Link>
        </button>
      </div>
      <div className="trending--home">
        <MapMovies
          mapeable={movies}
        />
      </div>
      <div className='categories--home'>
        <div className='categories_title--home'>
          Categories
        </div>
        <div className='genres--home'>
          <MapGenres
            mapeable={genres}
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
