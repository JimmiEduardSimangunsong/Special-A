
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css"

function App() {
  return (
    <div>
    <div className='mybackground'>
      <NavigationBar />
      <Intro/>
    </div>
    <div className='line'></div>

    <div className='about-us'>
  
    </div>

    {/* <div className='trending'>
      <Trending/>
    </div>

    <div className='superhero'>
      <SuperHero/>
    </div> */}

    </div>
  );
}

export default App;
