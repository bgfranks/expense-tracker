import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

// styles
import './Navbar.scss';

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <div className='navbar'>
      <ul>
        <li className='title'>Expensely</li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <button className='btn' onClick={logout}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
}
