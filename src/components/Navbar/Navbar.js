import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    swal({
      title: 'Are you sure?',
      text: 'You Want to Log Out?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('You Are Successfully Log Out', {
          icon: 'success',
        });
        signOut(auth);
        navigate('/login')
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">My Todos</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/">Add Todos</Link>
          </li>
          <li>
            <button onClick={handleSignOut}>
              {user && <Link to="">Log Out</Link>}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
