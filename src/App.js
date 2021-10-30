import './App.css';
import "productsData";
import Header from 'components/Header';
import HeaderBottom from 'components/Bottomheader';
import Body from 'components/Body';
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="hr" />
      <HeaderBottom></HeaderBottom>
      <Body></Body>
      {/* <Basket></Basket> */}
    </div>
  );
}

export default App;
