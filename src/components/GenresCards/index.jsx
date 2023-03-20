import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const GenresCards = ({ genre }) => {
  const { id, name } = genre;

  // esto lo puedo hacer un solo elemento pasandole la clase de genres--cards al link y sus clases de boostrap, asi se elimina el div ese y queda todo en un solo elemento.

  return (
    <Link to={'/genre'} state={{ id, name }}>
      <div className='genres--cards mt-2 mr-10 text-dark'>
        {name}
      </div>
    </Link>
  );
};

export { GenresCards };
