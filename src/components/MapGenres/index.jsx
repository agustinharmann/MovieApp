import { GenresCards } from '../GenresCards';

const MapGenres = ({ mapeable }) => {
  return mapeable.map((genre) =>
    <GenresCards key={genre.id}
      genre={genre}
    />);
};

export { MapGenres };
