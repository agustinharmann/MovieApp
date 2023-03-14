import { Link } from 'react-router-dom';
import './styles.css';

const GenresCards = ({ genre }) => {
  const {id} = genre;
  return (
    <Link to={'/genre'} state={{ some: id }}>
      <div className='genres--cards'>
        {genre.name}
      </div>
    </Link>
  );
};

export { GenresCards };
