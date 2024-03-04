import './App.css';
import Accordian from './components/Accordian/Accordian';
import RandomColor from './components/RandomColor';
import  StarRating from './components/StarRating/StarRating';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
