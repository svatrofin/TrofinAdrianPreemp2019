import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {


}

    if (props.categories) {

        return <div className="sidebar-container">
            <div className="all-categ button-category-name">All Categories</div>
            {Object.keys(props.categories).map((category, index) => {
                return <button className="side-btn" key={index}>
                {category}
                </button>
               
            })}

            
        </div>

   
        
    }
    return null;

export default Sidebar;