import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const Navbar = () => {

  const { inputValue, onInputChange, handleSubmit, getMoviesBySearch } = useContext(UserContext);

  return (
    <div className='header d-flex flex-column w-100 py-1'>
      <form className='d-flex w-100 form_search--header' role='search' onSubmit={handleSubmit}>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={inputValue}
          onChange={onInputChange}
        />
        {/* <button
            className='btn btn-primary btn_search--header'
            type='submit'
          > */}
        <button className='btn btn-primary btn_search--header' type='submit' onClick={ () => getMoviesBySearch(inputValue)}>
          Search
        </button>
        {/* </button> */}
      </form>
    </div >
  );
};

export { Navbar };
