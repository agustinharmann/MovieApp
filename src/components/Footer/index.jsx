import React from 'react';
import { BsCodeSlash, BsGithub, BsLinkedin } from 'react-icons/bs';
import './styles.css';

const Footer = () => {
  return (
    <footer className='footer px-3'>
      <section className='container-section--footer d-flex'>
        <div className='column--footer d-flex flex-column'>
          <a className='info--footer d-flex align-items-center my-2' href='https://github.com/agustinharmann/MovieApp' target='_blank' rel='noreferrer'>
            <BsCodeSlash className='icon--footer' />
            View the code
          </a>
          <a className='info--footer d-flex  my-2' href='https://www.themoviedb.org/documentation/api' target='_blank' rel='noreferrer'>
            Documentation of API
          </a>
        </div>
        <div className='column--footer d-flex flex-column'>
          <a className='info--footer d-flex align-items-center my-2' href='https://www.linkedin.com/in/agustin-harmann-1a4794269/' target='_blank' rel='noreferrer'>
            <BsLinkedin className='icon--footer' />
            Linkedin
          </a>
          <a className='info--footer d-flex align-items-center my-2' href='https://github.com/agustinharmann' target='_blank' rel='noreferrer'>
            <BsGithub className='icon--footer' />
            Github
          </a>
        </div>
      </section>
      <section className='container-section--footer'>
        <p className='content-second-section--footer'>Powered by agustinharmann</p>
      </section>
    </footer>
  );
};

export { Footer };
