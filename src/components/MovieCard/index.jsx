import { Link } from 'react-router-dom';
import { Movie } from '../Movie';
import './styles.css';

const MovieCard = ({ movieCard }) => {
  
  return (
    <Link
      to={'/info'}>
      <div className='movie--card'>
      <Movie movieCard={movieCard} />
        <img className='movie_img--card' src={`https://image.tmdb.org/t/p/w200${movieCard.poster_path}`} alt="" />
      </div>
    </Link>
  );
};

export { MovieCard };
