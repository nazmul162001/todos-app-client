import React from 'react';
import spinner from '../../../src/images/spinner.gif';

const Spinner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="spinner-img">
        <img className='w-12 h-12' src={spinner} alt="/spinner-images" />
      </div>
    </div>
  );
};

export default Spinner;