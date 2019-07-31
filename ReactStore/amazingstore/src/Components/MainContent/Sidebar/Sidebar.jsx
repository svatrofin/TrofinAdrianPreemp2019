 import React from 'react';
 import './Sidebar.css';

 class Sidebar extends React.Component{

    constructor(props){
    super(props);
    this.state = {
        showElem : false

    }
this.showElements = this.showElements.bind(this);

}

showElements(index,category){
    this.setState({showElem:true})
}
render(){

    
   
        if (this.props.categories) {
   
            return <div className="sidebar-container">
                <div className="all-categ button-category-name">All Categories</div>
                {Object.keys(this.props.categories).map((category, index) => {
                    
                    return <div>
                    <button className="side-btn" key={index} onClick={()=>this.showElements(index,category)}>
                        
                    {category}
                    
                    </button>


                {this.state.showElem &&
                    <ul>{this.props.categories[category].map((item, i)=><li>{item}</li>)}</ul>}
                    </div>
                   
                })}
   
                
            </div>
   
       
            
        } return null;

}


 }
 

 
 export default Sidebar;
