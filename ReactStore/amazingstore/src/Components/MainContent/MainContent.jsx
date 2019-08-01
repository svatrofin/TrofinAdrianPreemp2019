import React from 'react';
import SideBar from './Sidebar/Sidebar';
import TopContent from './TopContent/TopContent';

class MainContent extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           categories: {
               face: ['CREAMS & GELS', 'Patches', 'Emulsions','Toners','Face Cleaning','Make Up Removal','Scrubs','Peeling','Masks'],
               body: ['test-body'],
               foot: ['test-foot'],
               hands: ['test-hands'],
               hair: ['test-hair'],
               makeup: ['test-makeup']
           }
       }
   }


   render() {
       return (
           <>
           <TopContent/>
           <SideBar categories={this.state.categories}/>
           </>
       )
   }
}
export default MainContent;