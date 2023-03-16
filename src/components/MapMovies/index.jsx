import { MovieCard } from '../MovieCard';

const MapMovies = ({ mapeable }) => {
  return mapeable.map((movieCard) =>
    <MovieCard key={movieCard.id}
      movieCard={movieCard}
    />);
};

export { MapMovies };
