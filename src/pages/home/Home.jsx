import { useAuthContext } from '../../hooks/useAuthContext';

// components
import TransactionForm from './TransactionForm';

// styles
import './Home.scss';

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className='container'>
      <div className='content'>transaction list</div>
      <div className='sidebar'>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
