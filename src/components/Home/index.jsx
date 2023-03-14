import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { Link } from 'react-router-dom';
import { MapMovies } from '../MapMovies';
import { MapGenres } from '../MapGenres';
import { AiOutlineSearch } from 'react-icons/ai';

const Home = () => {

  const { movies, genres, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='home'>
      <div className="d-flex justify-content-between flex-wrap w-100 my-3">
        <div className="fs-1 fw-bold text-primary">MoviesApp</div>
        <div className="d-flex align-items-center">
          <Link to={"/movies-searched"}>
            <button className="btn btn-primary">
              <AiOutlineSearch className="mx-1" />
              Search movie
            </button>
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center flex-wrap w-100 mt-1">
        <div className="fs-5 fw-bold text-primary">Trendings of day</div>
        <a href="/Trending" className="btn btn-primary">
          View all
        </a>
      </div>
      <div className="d-flex overflow-auto">
        <MapMovies mapeable={movies} />
      </div>
        <div className='my-5'>
          <div className='mb-1 fs-4 fw-bold text-primary'>
            Categories
          </div>
          <div className='overflow-auto'>
            <MapGenres
              mapeable={genres}
            />
          </div>
        </div>
    </div>
  );
};

export { Home };
