import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import './styles.css';

const Navbar = () => {

  const { inputValue, onInputChange, handleSubmit, setShowQuery, getMoviesBySearch } = useContext(UserContext);

  return (
    <div className='header d-flex flex-column py-1'>
      <form className='form_search--header d-flex' role='search' onSubmit={handleSubmit}>
        <input
          className='form-control'
          type='search'
          placeholder='Search'
          aria-label='Search'
          value={inputValue}
          onChange={onInputChange}
        />
        <button
          className='btn_search--header btn btn-primary d-flex align-items-center justify-content-center' type='submit' onClick={() => {
            getMoviesBySearch(inputValue);
            setShowQuery(inputValue);
          }}
        >
          Search
        </button>
      </form>
    </div >
  );
};

export { Navbar };
