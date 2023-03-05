import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/userProvider';
import { Link, useLocation } from 'react-router-dom';
import { MapGenres } from '../MapGenres';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import './styles.css';
import { MapMovies } from '../MapMovies';

const Movie = () => {

  const { loading, getMovie, movie, getRelatedMovies, related } = useContext(UserContext);
  let { state } = useLocation();

  // console.log(movie);  937278


  useEffect(() => {

    getMovie(state.some);
    getRelatedMovies(state.some);

  }, [getMovie, getRelatedMovies, state.some]);

  // console.log(movie.id);
  console.log(state.some);
  console.log(related.results);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='movie'>

      <div className='header--movie'>
        <Link to={'/'} className='arrow_at_home--movie'>
          <IoIosArrowBack className='icon_arrow--movie' />
        </Link>
      </div>

      <div className='content--movie'>
        <div className='column--movie'>

          <div className='container_image--movie'>
            <img className='img--movie' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`poster of "${movie.title}"`} />
          </div>

        </div>

        <div className='column--movie'>

          <div className='content__info--movie'>
            <div className='first_info--movie'>
              <p className='title--movie'> {movie.title} </p>
              {movie.vote_average && <p className='vote--movie'> <AiFillStar className='icon_vote--movie' /> {movie.vote_average} </p>}
            </div>
            {movie.overview && <div className='overview--movie'>
              {movie.overview}
            </div>}
            {movie.genres && <div className='genres--movie'>
              <MapGenres
                mapeable={movie.genres}
              />
            </div>}
          </div>


        </div>
      </div>
      {related.results && <div className='container-related_movies--movie'>
        <div className='title-related_movies--movie'>
          Related movies
        </div>
        <div className='content-related_movies--movie'>
          {<MapMovies
            mapeable={related.results}
          />}
        </div>
      </div>}

    </div>
  );
};

export { Movie };
