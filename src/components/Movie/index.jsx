import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../utils/userProvider';
import { IoIosArrowBack } from 'react-icons/io';
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
      <div className='column--movie peli'>
        <img src={movie.poster_path} alt="" />
        {console.log(movie.poster_path)}
        <div className='title--movie'>
          <div className='arrow_at_home--movie'>
            <IoIosArrowBack className='icon_arrow--movie' />
          </div>
          {movie.title}
          <div className='arrow_at_home--movie'>a</div>
        </div>
      </div>
      <div className='column--movie'>
        <p>Movie: {state.some}</p>
      </div>
    </div>
  );
};

export { Movie };
