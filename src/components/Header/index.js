import React from "react";
import "./style.css"
import Logo from "../../assets/hepsiburadalogo.png";
import Searchicon from "../../assets/searchicon.png";
import { useDispatch } from "react-redux";
import { setSearchedData } from "../../redux/slices/Filters/index";

function Header() {
  const dispatch = useDispatch();
  
  const searchProduct = (searchItem) => {
    dispatch(setSearchedData(searchItem.trim()));
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
            onChange={(e)=>searchProduct(e.target.value)}
          ></input>
        </div>
        <div className="basket">
          <button type="button" className="basketInput">
            Sepetim <span className="basketCount">4</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
