import LandingPage from './components/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <div className='bg-background'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
