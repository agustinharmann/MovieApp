import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const MovieCard = ({ movieCard }) => {
  const {id} = movieCard;
  return (
    <Link to={'/info-movie'} state={{ some: id }}>
      <div className='movie--card my-3 mx-1'>
        { movieCard.poster_path ? <img className='movie_img--card rounded-3' src={`https://image.tmdb.org/t/p/w200${movieCard.poster_path}`} alt={movieCard.title} /> : movieCard.title}
      </div>
    </Link>
  );
};

export { MovieCard };
