import React from 'react';
import { MapMovies } from '../MapMovies';

const RelatedMovies = ({ related }) => {


  return (
    <div className='container-related_movies--movie my-4 px-3'>
      <div className='title-related_movies--movie fs-3'>
        Related movies
      </div>
      <div className='content-related_movies--movie d-flex overflow-auto text-nowrap'>
        <MapMovies
          dataToMap={related}
        />
      </div>
    </div>
  );
};

export { RelatedMovies };
