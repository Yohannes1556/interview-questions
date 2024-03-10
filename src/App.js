import './App.css';
import Accordian from './components/Accordian/Accordian';
import ImageSlider from './components/ImageSlider/ImageSlider';
import LoadMoreData from './components/LoadMoreData/LoadMoreData';
import RandomColor from './components/RandomColor';
import  StarRating from './components/StarRating/StarRating';
import TreeView from './components/TreeView/TreeView';
import menus from './components/TreeView/data';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={10}/> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}


      {/* <LoadMoreData /> */}

      <TreeView menus={menus}/>
    
    
    
    </div>
  );
}

export default App;
