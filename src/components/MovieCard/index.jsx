import { Link } from 'react-router-dom';
import './styles.css';

const MovieCard = ({ movieCard }) => {
  // console.log(movieCard);
  const {id} = movieCard;
  return (
    <Link to={'/info-movie'} state={{ some: id }}>
      <div className='movie--card'>
        <img className='movie_img--card' src={`https://image.tmdb.org/t/p/w200${movieCard.poster_path}`} alt={movieCard.title} />
      </div>
    </Link>
  );
};

export { MovieCard };
