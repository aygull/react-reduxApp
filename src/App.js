import React from 'react';
import ToolBar from './components/ToolBar.container';
import List from './components/List.container';
import Pager from './components/Pager.container'
import './App.css';

function App() {
  return (
    <div className="App">
        <ToolBar />
        <List/>
        <Pager/>
    </div>
  );
}

export default App;
