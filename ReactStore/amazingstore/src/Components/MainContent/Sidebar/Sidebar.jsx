import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    if (props.categories) {
        return <div className="sidebar-container">
            {Object.keys(props.categories).map((category, index) => {
                return <button key={index}>{category}</button>

            })}
        </div>

    }
    return null;


}



export default Sidebar;