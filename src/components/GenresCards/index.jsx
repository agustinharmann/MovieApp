import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const GenresCards = ({ genre }) => {
  
  const { id, name } = genre;

  return (
    <Link className='genres--cards mt-2 mr-10 text-dark' to={'/genre'} state={{ id, name }}>
      {name}
    </Link>
  );
};

export { GenresCards };
