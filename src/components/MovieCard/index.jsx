import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const MovieCard = ({ id, title, posterPath }) => {

  return (
    <Link to={'/info-single-movie'} state={{ id }}>
      <div className='movie--card my-3 mx-1'>
        <img className='movie_img--card rounded-3' src={`https://image.tmdb.org/t/p/w200${posterPath}`} alt={title} />
      </div>
    </Link>
  );
};

export { MovieCard };
