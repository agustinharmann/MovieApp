import './styles.css';

const Genres = ( {genre} ) => {
  console.log(genre);
  // console.log(genres);
  // console.log(genres.id);
  return (
    <div className='genres'>
      {genre.name}
    </div>
  );
};

export { Genres };
