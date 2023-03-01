import { MovieCard } from '../MovieCard';
import './styles.css';

const MapMovies = ({ mapeable }) => {
  return mapeable.map((movieCard) =>
    <MovieCard key={movieCard.id}
      movieCard={movieCard}
    />)
};

export { MapMovies };
