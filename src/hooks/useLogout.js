import { useState } from 'react';
import { auth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign the user out
    try {
      await auth.signOut();

      // dispatch logout action
      dispatch({ type: 'LOGOUT' });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.mesasge);
      setError(err.mesasge);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
