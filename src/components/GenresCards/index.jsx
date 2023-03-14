import { Link } from 'react-router-dom';
import './styles.css';

const GenresCards = ({ genre }) => {
  const {id, name} = genre;

  return (
    <Link to={'/genre'} state={{ some: id, name }}>
      <div className='genres--cards mt-2 mr-10 text-dark'>
        {name}
      </div>
    </Link>
  );
};

export { GenresCards };
