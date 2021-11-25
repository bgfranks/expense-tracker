import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

// styles
import './Navbar.scss';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
      <ul>
        <li className='title'>Expensely</li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>
                Log Out
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
