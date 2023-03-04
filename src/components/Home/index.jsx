import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/userProvider';
import { Genres } from '../Genres';
import { MapMovies } from '../MapMovies';
import './styles.css';

const Home = () => {

  const { movies, genres, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='home'>
      <div className="d-flex justify-content-between align-items-center w-100 mt-4">
        <div className='title_trendings--home'>Tendencias</div>
        <button className='btn_trending--home btn btn-primary'>
          <Link to={'/Trending'}>Ver mas</Link>
        </button>
      </div>
      <div className="trending--home">
        <MapMovies
          mapeable={movies}
        />
      </div>
      <div className='genres'>
        {
          genres.map((genres) => <div key={genres.id} className='genres_container--home'>
            <Genres
              genres={genres}
            />
          </div>)
        }
      </div>
    </div>
  );
};

export { Home };
