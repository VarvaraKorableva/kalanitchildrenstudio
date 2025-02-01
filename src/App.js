import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Slider from './Components/Slider/Slider'
import Schedule from './Components/Schedule/Schedule'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Schedule></Schedule>
    </div>
  );
}

export default App;
