import React from 'react';
import { GenresCards } from '../GenresCards';

const MapGenres = ({ dataToMap }) => {
  return dataToMap.map((genre) =>
    <GenresCards key={genre.id}
      genre={genre}
    />);
};

export { MapGenres };
