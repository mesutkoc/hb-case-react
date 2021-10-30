import React,{useState} from "react";
import "./style.css"
import Logo from "../../assets/hepsiburadalogo.png";
import Searchicon from "../../assets/searchicon.png";
import { useDispatch } from "react-redux";
import { setSearchedData } from "../../redux/slices/Products/index";
import Basket from "../Basket";

function Header() {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  
  const searchProduct = (searchItem) => {
    dispatch(setSearchedData(searchItem.trim()));
  }
  const seeBasket = () => {
    hover===false?setHover(true):setHover(false)
    
  }
  return (
    <div className="headerContainer">
      <div className="headerElements">
        <div className="headerLogo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="input_container">
          <img src={Searchicon} alt="searchicon" className="input_icon" />
          <input
            type="text"
            id="fname"
            className="searchInput"
            placeholder="25 milyon'dan fazla ürün içerisinde ara"
            onChange={(e) => searchProduct(e.target.value)}
          ></input>
        </div>
        <div
          className="basket"
          onClick={() => seeBasket()}
        >
          <button type="button" className="basketInput">
            Sepetim <span className="basketCount">4</span>
          </button>
        </div>
        <Basket props={hover}></Basket>
      </div>
    </div>
  );
}

export default Header;
