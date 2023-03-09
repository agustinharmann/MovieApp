import { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/userProvider';
import { Navbar } from '../Navbar';
import { MapMovies } from '../MapMovies';
import './styles.css';

const MoviesSearched = () => {

  const { moviesSearch } = useContext(UserContext);

  const { results } = moviesSearch;

  return (
    <div className='movies_searched--searched'>

      <div className='header--searched'>
        <Link to={'/'} className='arrow_at_home--searched'>
          <IoIosArrowBack className='icon_arrow--searched' />
        </Link>
        <h2 className='app_titile--header my-3'>MoviesApp</h2>
      </div>
        <Navbar />

      {results && <div className="movies--searched">
        <MapMovies
          mapeable={results}
        />
      </div>}
    </div>
  );
};

export { MoviesSearched };
