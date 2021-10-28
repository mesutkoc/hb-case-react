import React from 'react'
import { useSelector } from "react-redux";

function Header() {
    const list = useSelector(state => state.products.productsData);
    console.log(list)
    return (
        <div>
            
        </div>
    )
}
export default Header;
