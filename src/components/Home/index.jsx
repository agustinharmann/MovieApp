import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { Link } from 'react-router-dom';
import { MapMovies } from '../MapMovies';
import { MapGenres } from '../MapGenres';
import { AiOutlineSearch } from 'react-icons/ai';
import './styles.css';

const Home = () => {

  const { movies, genres, loading } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <div className='home'>
      <div className='d-flex justify-content-between flex-wrap w-100 my-3'>
        <div className='title--app fs-1 fw-bold'>MoviesApp</div>
        <div className='d-flex align-items-center'>
          <Link to={'/movies-searched'}>
            <button className='btn--home btn d-flex align-items-center'>
              <AiOutlineSearch className='mx-1' />
              Search movie
            </button>
          </Link>
        </div>
      </div>
      <div className='d-flex justify-content-between align-items-center flex-wrap w-100 mt-1'>
        <div className='title--app fs-5 fw-bold'>Trendings of day</div>
        <Link to='/Trending' className='btn--home btn'>
          View all
        </Link>
      </div>
      <div className='d-flex overflow-auto'>
        <MapMovies mapeable={movies} />
      </div>
      <div className='my-5'>
        <div className='title--app mb-1 fs-4 fw-bold'>
          Categories
        </div>
        <div className='genres--home d-flex flex-column flex-wrap' >
          <MapGenres
            mapeable={genres}
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
