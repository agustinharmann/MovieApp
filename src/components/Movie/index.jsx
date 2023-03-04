import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../utils/userProvider';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import './styles.css';

const Movie = () => {

  const { getMovie, movie } = useContext(UserContext);
  let { state } = useLocation();

  console.log(movie);

  useEffect(() => {

    getMovie(state.some);

  }, [state.some, getMovie]);

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
              <p className='vote--movie'> <AiFillStar className='icon_vote--movie' /> {movie.vote_average} </p>
            </div>
            <p className='overview--movie'>
              {movie.overview}
              <p>Movie: {state.some}</p>
            </p>
          </div>


        </div>
      </div>


      {/* <div className='header--movie'>
        
        <div className='title--movie'>{movie.title}</div>
        <div className='arrow_at_home--movie'>a</div>
      </div>

      <div className='content--movie'>
      </div> */}

    </div>
  );
};

export { Movie };
