import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { MapMovies } from '../MapMovies';
import { IoIosArrowBack } from 'react-icons/io';
import './styles.css';
import { Unavailable } from '../Unavailable';

const MoviesSearched = () => {

  const { moviesSearch, inputValue } = useContext(UserContext);

  const { results } = moviesSearch;

  return (
    <div className='movies_searched--searched'>

      <div className='header--searched d-flex align-items-center justify-content-between'>
        <Link to={'/'} className='arrow_at_home d-flex justify-content-center align-items-center'>
          <IoIosArrowBack className='icon_arrow fs-1' />
        </Link>
        <Link to={'/'} className='title--searched my-4 fs-1'>MoviesApp</Link>
        <div className='disable_icon'></div>
      </div>
      <Navbar />
      {results && <div>
        {
          results.length ? <div className='movies--searched d-flex justify-content-center flex-wrap'>
            <MapMovies
              mapeable={results}
            />
          </div> :
            <Unavailable unavailable='movie searched' element={`"${inputValue}"`} />
        }
      </div>}
    </div>
  );
};

export { MoviesSearched };
