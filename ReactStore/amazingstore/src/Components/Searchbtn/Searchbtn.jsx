import React from 'react';
import './Searchbtn.css';


const SearchBtn = () => {
    return (
        <a href="/">
        <div className="myCart">
            <i className="fas fa-cart-plus cart-icon"></i>
            <div className="myCart-text">My Cart</div>
            <div className="count"> 12 </div>
        </div>
    </a>

        )
}

export default SearchBtn;
