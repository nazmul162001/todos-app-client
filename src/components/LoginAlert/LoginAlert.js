import React from 'react';
import { Link } from 'react-router-dom';

const LoginAlert = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-red-600 text-3xl ">
          You Can not Acccess Without Login
        </h1>
      </div>
      <br />
      <div className="button">
        <button className="btn btn-primary">
          {' '}
          <Link to="/login">Login Now</Link>{' '}
        </button>
      </div>
    </div>
  );
};

export default LoginAlert;
