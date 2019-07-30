import React from 'react';
import './Searchbar.css';


const Searchbar = () => {
    return (
<div className="header-bottom">
            <div className="searchBar">
                <i className="fas fa-search"></i>
                
                <input type="text" placeholder="Search products by SKU or name"></input>
                </div>
            
 </div>
        )
}

export default Searchbar;
