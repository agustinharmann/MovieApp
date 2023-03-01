import { Link } from 'react-router-dom';
import './styles.css';

const MovieCard = ({ movieCard }) => {
  // console.log(movieCard);
  return (
    <Link to={'info'}>
      <div className='movie--card'>
        <img className='movie_img--card' src={`https://image.tmdb.org/t/p/w200${movieCard.poster_path}`} alt="" />
      </div>
    </Link>
  );
};

export { MovieCard };
