import './App.css';
import "productsData";
import Header from 'components/Header';
import HeaderBottom from 'components/Bottomheader';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="hr" />
      <HeaderBottom></HeaderBottom>
    </div>
  );
}

export default App;
