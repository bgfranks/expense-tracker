import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [iscancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // sign up user
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);

      if (!res) {
        throw new Error('Could not complete signup');
      }

      // add display name to user
      await res.user.updateProfile({ displayName });

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      // update state
      if (!iscancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!iscancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
