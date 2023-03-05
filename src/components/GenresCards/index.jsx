import { Link } from 'react-router-dom';
import './styles.css';

const GenresCards = ({ genre }) => {
  const {id} = genre;
  // console.log(genre);
  // console.log(id);
  // console.log(genres);
  // console.log(genres.id);
  return (
    <Link to={'/genre'} state={{ some: id }}>
      <div className='genres--cards'>
        {genre.name}
      </div>
    </Link>
  );
};

export { GenresCards };
