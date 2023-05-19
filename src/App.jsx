import LandingPage from './components/pages/LandingPage';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Dashboard from './components/pages/Dashboard';
import LoadingPage from './components/pages/LoadingPage';
import useAppContext from './context/Context';
import Modal from './components/Modal';
import Articles from './components/pages/Articles';
import Post from './components/Post';
import NewPost from './components/NewPost';
import { useEffect, useState } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase-config/firebase-config';

function App() {
  const { user, isLoading, setInitialLocation } = useAppContext();
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn'))
  );
  const location = useLocation();
  const adminEmail = import.meta.env?.VITE_ADMIN_EMAIL;
  const localhost = window.location.hostname;

  logEvent(analytics, 'screen_view', {
    firebase_screen: location.pathname,
    traffic_type: localhost,
  });

  useEffect(() => {
    setInitialLocation(location.pathname);
  }, []);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')));
  }, [isLoggedIn, user]);

  function AuthWrapper() {
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className='bg-background overflow-x-hidden grid'>
      <Modal />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route path='/*' element={<AuthWrapper />}>
          <>
            <Route path='articles/' element={<Articles />} />
            <Route path='articles/:postId' element={<Post />} />
            {user?.email === adminEmail && (
              <Route path='articles/createnew' element={<NewPost />} />
            )}
            <Route path='dashboard' element={<Dashboard />} />
          </>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
