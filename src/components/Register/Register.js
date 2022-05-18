import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Register = () => {
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  let errorMessage;
  if(error){
    errorMessage = <p className='italic text-red-600'> {error.message} </p>
  }

  if(user){
    navigate('/')
  }

  if(loading){
    return <Spinner />
  }
  

  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    // check password match 
    if(password !== confirmPassword) {
      setErr('Password do not match')
      return;
    }
    createUserWithEmailAndPassword(email, password);
    setErr('')
  }
  

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              name='email'
              placeholder="email"
              required
              class="input input-bordered"
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
          <div class="form-control">
            <label class="label">
              <span class="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name='confirmPassword'
              required
              placeholder="confirm password"
              class="input input-bordered"
            />
          </div>
          {errorMessage}
          <p className='text-red-600 italic'>{err}</p>
          <p className="">
            Already a Member?{' '}
            <Link to="/login">
              <strong className="italic">Login</strong>
            </Link>{' '}
          </p>
          <div class="form-control mt-6">
            <button class="btn btn-primary">
              <input type="submit" value="Register Account" />
            </button>
          </div>
          <div class="divider">OR</div>
          <button class="btn btn-secondary btn-outline">
            Login With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
