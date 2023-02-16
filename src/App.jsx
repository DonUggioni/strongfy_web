import NavBar from './components/navBar';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <>
      <NavBar />
      <div className='bg-background'>
        <LandingPage />
      </div>
    </>
  );
}

export default App;
