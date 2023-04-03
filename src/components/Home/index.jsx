import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { Link } from 'react-router-dom';
import { MapMovies } from '../MapMovies';
import { MapGenres } from '../MapGenres';
import { AiOutlineSearch } from 'react-icons/ai';
import './styles.css';

const Home = () => {

  const { loading, trendingsMovies, popularsMovies, genres } = useContext(UserContext);

  if (loading) {
    return <div>Cargando...</div>;
  };

  return (
    <div className='home'>
      <div className='d-flex justify-content-between align-items-center flex-wrap w-100 mt-4'>
        <div className='title--app fs-1 fw-bold'>MoviesApp</div>
        <Link className='btn--home py-2 px-2 btn d-flex align-items-center' to={'/search'}>
          <AiOutlineSearch className='mx-1' />
          <p className='my-0 mx-1'>Search movie</p>
        </Link>
      </div>
      <div className='d-flex justify-content-between align-items-center flex-wrap w-100  mt-4'>
        <div className='title--app fs-5 fw-bold'>Trendings of day</div>
        <Link to='/trending' className='btn--home btn'>
          View all
        </Link>
      </div>
      <div className='d-flex overflow-auto'>
        <MapMovies dataToMap={trendingsMovies} />
      </div>
      <div className='w-100 mt-4 d-flex justify-content-between align-items-center flex-wrap'>
        <div className='title--app fs-5 fw-bold'>Populars of day</div>
        <Link to='/popular' className='btn--home btn'>
          View all
        </Link>
      </div>
      <div className='d-flex overflow-auto'>
        <MapMovies dataToMap={popularsMovies} />
      </div>
      <div className='my-5'>
        <div className='title--app mb-1 fs-4 fw-bold'>
          Categories
        </div>
        <div className='genres--home d-flex flex-column flex-wrap' >
          <MapGenres
            dataToMap={genres}
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
