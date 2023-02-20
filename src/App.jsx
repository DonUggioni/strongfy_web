import NavBar from './components/navBar';
import LandingPage from './components/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

function App() {
  return (
    <>
      <NavBar />
      <div className='bg-background'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
