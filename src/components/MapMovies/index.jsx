import React from 'react';
import { filtrado } from '../../utils/transforms';
import { MovieCard } from '../MovieCard';


const MapMovies = ({ dataToMap }) => {

  const filmsWithPoster = filtrado(dataToMap);

  return filmsWithPoster.map(({ id, title, poster_path }) =>
    <MovieCard
      key={id}
      id={id}
      title={title}
      posterPath={poster_path}
    />);
};


export { MapMovies };
