import './App.css';
import "productsData";
import Header from 'components/Header';
import HeaderBottom from 'components/Bottomheader';
import Body from 'components/Body';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="hr" />
      <HeaderBottom></HeaderBottom>
      <Body></Body>
    </div>
  );
}

export default App;
