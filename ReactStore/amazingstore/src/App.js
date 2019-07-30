import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/MainContent/Sidebar/Sidebar';
import MainContent from './Components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
