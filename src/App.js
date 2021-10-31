import './App.css';
import "productsData";
import Header from 'components/Header';
import HeaderBottom from 'components/Bottomheader';
import Body from 'components/Body';
import Removemodal from 'components/Basket/Removemodal';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="hr" />
      <HeaderBottom></HeaderBottom>
      <Body></Body>
      <Removemodal></Removemodal>
    </div>
  );
}

export default App;
