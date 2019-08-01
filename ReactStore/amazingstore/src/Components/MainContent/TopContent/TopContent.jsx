import React from 'react';
import './TopContent.css';

class TopContent extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        showElem : true
    }
    }


render() {
return(

    <div class="body-col-2">
                <div class="brand-menu">
                    <div class="upper-brand-menu">
                        <div class="item-type">Creams and Gel</div>
                        <div class="arrow-section">Showing 60 of 392 <img height="20px" src="images/left-arrow.png"
                                border='1'></img>
                            <img height="20px" src="images/right-arrow.png" border='1'></img></div>
                    </div>
                    <div class="lower-brand-menu">
                        <div class="product-selection-details">
                            <div>Brand: <span>All Brands</span></div>
                            <div>Skin Type: <span>For oily skin</span></div>
                            <div>Age: <span>30+</span></div>
                        </div>
                        <div class="sort">Sort &nbsp; <span>by: Popularity</span></div>
                    </div></div></div>
   

)
}
}
export default TopContent;