import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { Link, useLocation } from 'react-router-dom';
import { MapGenres } from '../MapGenres';
import { MapMovies } from '../MapMovies';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import './styles.css';

const Movie = () => {

  const { loading, getMovie, movie, getRelatedMovies, related } = useContext(UserContext);
  
  let { state } = useLocation();

  useEffect(() => {

    getMovie(state.some);
    getRelatedMovies(state.some);

  }, [getMovie, getRelatedMovies, state.some]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='movie d-flex flex-column'>
      <div className='header--movie d-flex align-items-center'>
        <Link to={'/'} className='arrow_at_home--movie d-flex justify-content-center align-items-center'>
          <IoIosArrowBack className='icon_arrow--movie fs-1' />
        </Link>
      </div>
      <div className='content--movie d-flex'>
        <div className='column--movie d-flex justify-content-center align-items-center'>
          {movie.poster_path && <div className='container_image--movie'>
            <img className='img--movie rounded-3 mx-2' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`poster of "${movie.title}"`} />
          </div>}
        </div>
        <div className='column--movie d-flex justify-content-center align-items-center'>
          <div className='content__info--movie'>
            <div className='first_info--movie d-flex justify-content-between px-2'>
              {movie.title && <p className='title--movie fs-4'> {movie.title} </p>}
              {movie.vote_average && <p className='d-flex align-items-center'> <AiFillStar className='icon_vote--movie mx-2' /> {movie.vote_average} </p>}
            </div>
            {movie.overview && <div className='overview--movie px-2'>
              {movie.overview}
            </div>}
            {movie.genres && <div className='genres--movie  d-flex flex-wrap my-4 px-2'>
              <MapGenres
                mapeable={movie.genres}
              />
            </div>}
          </div>
        </div>
      </div>
      {related.results && <div className='container-related_movies--movie my-4 px-2'>
        <div className='title-related_movies--movie fs-3'>
          Related movies
        </div>
        <div className='content-related_movies--movie d-flex overflow-auto text-nowrap'>
          {<MapMovies
            mapeable={related.results}
          />}
        </div>
      </div>}
    </div>
  );
};

export { Movie };
