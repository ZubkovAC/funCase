import React from 'react';
import './App.css';
import {Sidebar} from "./sidebar/sidebar";
import {Soups} from "./ui/soups/soups";

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Soups />
    </div>
  );
}

export default App;
