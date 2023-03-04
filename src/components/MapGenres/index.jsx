import { Genres } from '../Genres';

const MapGenres = ({ mapeable }) => {
  return mapeable.map((genre) =>
    <Genres key={genre.id}
      genre={genre}
    />);
};

export { MapGenres };
