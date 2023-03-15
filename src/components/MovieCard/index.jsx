import { Link } from 'react-router-dom';
import './styles.css';

const MovieCard = ({ movieCard }) => {
  // console.log(movieCard);
  const {id} = movieCard;
  return (
    // entrara verlo desde la peli de avatar que la peli de airon ma  no tienen poster path
    <Link to={'/info-movie'} state={{ some: id }}>
      <div className='movie--card'>
        { movieCard.poster_path ? <img className='movie_img--card' src={`https://image.tmdb.org/t/p/w200${movieCard.poster_path}`} alt={movieCard.title} /> : movieCard.title}
        {/* agregar validacion del poster path no disponible */}
      </div>
    </Link>
  );
};

export { MovieCard };
