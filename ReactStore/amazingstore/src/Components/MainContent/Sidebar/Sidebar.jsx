import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(index) {
    this.setState(state => ({
            
           currentItem:false
        }));
 

this.setState(state => ({
    currentItem:index
}))
        
        
  }
  
  render() {
    if (this.props.categories) {
      return (
        <div className="sidebar-container">
          <div className="all-categ button-category-name">All Categories</div>
          {Object.keys(this.props.categories).map((category, index) => {
            return (
              <div key={index}>
                <button
                  className="side-btn"
                  key={index}
                  onClick={() => this.handleToggleClick(index)}
                  
                >
                  {category}
                </button>

                {index === this.state.currentItem && (
                  <ul className="sub-cat">
                    {this.props.categories[category].map((item, i) => (
                      <li key={i}>
                      {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  }
}

export default Sidebar;
