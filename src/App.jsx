import LandingPage from './components/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Dashboard from './components/pages/Dashboard';
import LoadingPage from './components/pages/LoadingPage';
import useAppContext from './context/Context';

function App() {
  const { user, isLoading } = useAppContext();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className='bg-background'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        {user !== null && <Route path='dashboard' element={<Dashboard />} />}
      </Routes>
    </div>
  );
}

export default App;
