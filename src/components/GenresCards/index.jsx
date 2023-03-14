import { Link } from 'react-router-dom';
import './styles.css';

const GenresCards = ({ genre }) => {
  const {id} = genre;
  return (
    <Link to={'/genre'} state={{ some: id }}>
      <div className='genres--cards mt-2 mr-10 text-dark'>
        {genre.name}
      </div>
    </Link>
  );
};

export { GenresCards };
