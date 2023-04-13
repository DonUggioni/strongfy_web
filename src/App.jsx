import LandingPage from './components/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Dashboard from './components/pages/Dashboard';
import LoadingPage from './components/pages/LoadingPage';
import useAppContext from './context/Context';
import Modal from './components/Modal';
import Articles from './components/pages/Articles';
import Post from './components/Post';
import NewPost from './components/NewPost';

function App() {
  const { user, isLoading } = useAppContext();
  const adminEmail = import.meta.env?.VITE_ADMIN_EMAIL;

  if (isLoading) {
    return <LoadingPage />;
  }

  function protectedRoutes() {
    if (user !== null) {
      return (
        <>
          <Route path='/' element={<LandingPage />} />
          <Route path='articles' element={<Articles />} />
          <Route path='articles/:postId' element={<Post />} />
          {user.email === adminEmail && (
            <Route path='articles/createnew' element={<NewPost />} />
          )}
          <Route path='dashboard' element={<Dashboard />} />
        </>
      );
    } else {
      return (
        <>
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </>
      );
    }
  }

  return (
    <div className='bg-background overflow-x-hidden grid'>
      <Modal />
      <Routes>{protectedRoutes()}</Routes>
    </div>
  );
}

export default App;
