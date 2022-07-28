
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Information from './components/Information';
import "./style/landingPage.css";

function App() {
  return (
    <div>
    <div className='mybackground'>
      <NavigationBar />
      <Intro/>
    </div>
    <div className='line'></div>

    <div className='information-guild'>
    <Information/>
    </div>

    </div>
  );
}

export default App;
