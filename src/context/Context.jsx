import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';
import { auth, db } from '../firebase-config/firebase-config';

const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userTrainingInfo, setUserTrainingInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // On reload, user will persist
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

  useEffect(() => {
    if (user !== null) {
      getUserTrainingInfo();
    }
  }, [user]);

  // Get user info on login
  async function getUserInfo() {
    const userId = localStorage.getItem('strongfyUserId');
    const docRef = doc(db, 'users', userId);
    try {
      const docData = await getDoc(docRef);
      if (docData) {
        setUserInfo(docData.data());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // Get user training info from DB
  async function getUserTrainingInfo() {
    const userId = localStorage?.getItem('strongfyUserId');
    const docRef = query(
      collection(db, 'users', userId, 'CurrentWorkout'),
      orderBy('timeStamp', 'desc')
    );

    try {
      const docs = await getDocs(docRef);
      docs.forEach((doc) => {
        setUserTrainingInfo(doc.data());
      });
    } catch (error) {}
  }

  const values = {
    user,
    setUser,
    userInfo,
    isLoading,
    setIsLoading,
    getUserInfo,
    userTrainingInfo,
    setUserTrainingInfo,
    getUserTrainingInfo,
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
