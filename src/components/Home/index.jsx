import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { Link } from 'react-router-dom';
import { MapMovies } from '../MapMovies';
import { MapGenres } from '../MapGenres';
import './styles.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Home = () => {

  const { movies, genres, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='home'>
      <div className='d-flex justify-content-between w-100 my-3'>
        <div className='app_titile--header'>MoviesApp</div>
        <div className='search--home d-flex align-items-center'>
          <Link to={'/movies-searched'}>
            <button className='btn_search-movie--home btn btn-primary'>Search movie <AiOutlineSearch className='mx-1' /></button>
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-100 mt-1">
        <div className='title_trendings--home'>Trendings of day</div>
        <button className='btn_trending--home btn btn-primary'>
          <Link className='text_btn-trending--home' to={'/Trending'}>
            View all
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
