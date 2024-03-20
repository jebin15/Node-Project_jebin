//import logo from './logo.svg';
import './App.css';
import ExampleUseffectComponent from './ExampleUseffect.js';
import DataFetcher from './FetchingDataComp.js';
import ParentComponent from './Parent.js';
import Routes from './Routes.js';
import ColorChanger from './ColorChanger.js';


const App = () => {
  return (
    <div className="App">
      <h1><b>Hello Jebin. Welcome to React App</b></h1>
      <h2><b>This is your first react app</b></h2>
      <div><ExampleUseffectComponent/></div>
      <div><DataFetcher/></div>
      <div><ParentComponent/></div>
      <div><Routes/></div>
      <div><ColorChanger/></div>
    </div>
  );
};

export default App;

