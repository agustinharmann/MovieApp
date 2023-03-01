import './styles.css';

const Genres = ( {genres} ) => {
  // console.log(genres);
  // console.log(genres.id);
  return (
    <div className='genres'>
      {genres.name}
    </div>
  );
};

export { Genres };
