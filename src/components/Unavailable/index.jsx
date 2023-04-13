import React from 'react';

const Unavailable = ({ unavailable, element }) => {

  return (
    <section className='w-100'>
      {
        unavailable === 'movie searched' ?
          <div className={element && 'text-wrap text-center'}>
            We haven't found anything for {element}.
          </div> :
          <div className={element && 'text-wrap text-center'}>
            No {unavailable} {element && element} found.
          </div>
      }
    </section>
  );
};

export { Unavailable };
