import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              class="input input-bordered"
            />
          </div>
          <p className="">
            Already a Member?{' '}
            <Link to="/login">
              <strong className="italic">Login</strong>
            </Link>{' '}
          </p>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Register Account</button>
          </div>
          <div class="divider">OR</div>
          <button class="btn btn-secondary btn-outline">
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
