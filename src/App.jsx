import Hero from './components/Hero';
import NavBar from './components/navBar';

function App() {
  return (
    <div className='h-screen bg-background font-mont text-textColor box-border'>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
