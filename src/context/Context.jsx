import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase-config/firebase-config';

const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function persistCurrentUser() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          return;
        }
      });
    }
    persistCurrentUser();
  }, []);

  const values = {
    user,
    setUser,
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const ctx = useContext(AppContext);

  if (ctx === undefined) {
    throw new Error('useAppContext must be used within AppContext');
  }

  return ctx;
}

export default useAppContext;
