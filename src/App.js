import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Slider from './Components/Slider/Slider'
import Schedule from './Components/Schedule/Schedule'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import StickyButton from './Components/StickyButton/StickyButton'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Schedule></Schedule>
      <About></About>
      <Events></Events>
      <Contacts></Contacts>
      <Footer></Footer>

      <StickyButton></StickyButton>
    </div>
  );
}

export default App;
