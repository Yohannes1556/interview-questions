import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import ModalTest from "./components/CustomModalPopup/ModalTest";
import TabsTest from "./components/CustomTabs/TabsTest";
import GithubProfileFinder from "./components/GithubProfileFinder/GithubProfileFinder";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import QrCodeGenerator from "./components/QrCodeGenerator/QrCodeGenerator";
import RandomColor from "./components/RandomColor";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import StarRating from "./components/StarRating/StarRating";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={10}/> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menus={menus}/> */}

      {/* <QrCodeGenerator /> */}

      {/* <LightDarkMode /> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}


      {/* <TabsTest /> */}

      {/* <ModalTest /> */}

      <GithubProfileFinder />
    </div>
  );
}

export default App;
