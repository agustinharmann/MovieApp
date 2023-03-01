import './styles.css';

const Header = () => {
  return (
    <div className='header d-flex flex-column w-100 py-1'>
      <h2 className='app_titile--header my-3'>MoviesApp</h2>
      <form className='d-flex w-100 form_search--header' role="search">
        <input className='form-control me-2' type="search" placeholder="Search" aria-label="Search" />
          <button className='btn btn-primary btn_search--header' type="submit">Search</button>
      </form>
    </div >
  );
};

export { Header };
