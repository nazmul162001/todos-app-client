import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  

  let errorMessage;
  if(error){
    errorMessage = <p className='text-red-600 italic'> {error.message} </p>
  }

  if(loading){
    return <Spinner />
  }

  if(user){
    navigate(from, {replace: true});
  }

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  }
  
  return (
    <div class="hero min-h-screen bg-base-200">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                placeholder="email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                required
                class="input input-bordered"
              />
            </div>
            {errorMessage}
              <p className=''>New to Here? <Link to='/register'><strong className='italic'>Register</strong></Link> </p>
            <div class="form-control mt-6">
              <button class="btn btn-primary">
                <input type="submit" value="Login" />
              </button>
            </div>
            <div class="divider">OR</div>
              <button class="btn btn-secondary btn-outline">Login With Google</button>
          </form>
        </div>
    </div>
  );
};

export default Login;
