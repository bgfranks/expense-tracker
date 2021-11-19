import { Link } from 'react-router-dom';

// styles
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li className='title'>Expensely</li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </div>
  );
}
