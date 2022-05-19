import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-red-600 italic"> {error.message} </p>;
  }

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              className="input input-bordered"
            />
          </div>
          {errorMessage}
          <p className="">
            New to Here?{' '}
            <Link to="/register">
              <strong className="italic">Register</strong>
            </Link>{' '}
          </p>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              <input type="submit" value="Login" />
            </button>
          </div>
          <div className="divider">OR</div>
          <button className="btn btn-secondary btn-outline">
            Login With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
