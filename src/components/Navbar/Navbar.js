import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">My Todos</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to='/'>Add Todos</Link>
          </li>
          <li>
            <button onClick={()=> signOut(auth)}><Link to='/login'>Log Out</Link></button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
