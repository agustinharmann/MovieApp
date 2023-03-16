import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const Navbar = () => {

  const { inputValue, onInputChange, handleSubmit, getMoviesBySearch } = useContext(UserContext);

  return (
    <div className='header d-flex flex-column w-100 py-1'>
      <form className='form_search--header d-flex w-100 px-4' role='search' onSubmit={handleSubmit}>
        <input
          className='form-control mx-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={inputValue}
          onChange={onInputChange}
        />
        <button className='btn_search--header btn btn-primary d-flex align-items-center justify-content-center' type='submit' onClick={() => getMoviesBySearch(inputValue)}>
          Search
        </button>
      </form>
    </div >
  );
};

export { Navbar };
