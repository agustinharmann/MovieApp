import React from 'react';
import { MapMovies } from '../MapMovies';

const PopularMovies = ({ popularsMovies }) => {

  return (
    <article className='container-related_movies--movie my-4 px-3'>
      <div className='title-related_movies--movie fs-3'>
        Populars of day
      </div>
      <div className='content-related_movies--movie d-flex overflow-auto text-nowrap'>
        <MapMovies
          dataToMap={popularsMovies}
        />
      </div>
    </article>
  );
};

export { PopularMovies };
