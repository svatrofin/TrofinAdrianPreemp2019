import React from 'react';
import SideBar from './Sidebar/Sidebar';

class MainContent extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           categories: {
               face: ['CREAMS & GELS', 'Patches', 'Emulsions'],
               body: ['aaa','bbb'],
               foot: [],
               hands: [],
               hair: [],
               makeup: []
           }
       }
   }

   render() {
       return (
           <>
           <div>MainContent</div>
           <SideBar categories={this.state.categories}/>
           </>
       )
   }
}
export default MainContent;