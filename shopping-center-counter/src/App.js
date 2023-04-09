import React from 'react';
import './App.css';
import Counters from './Counters';
import HelloWorld from './HelloWorld';
import { Menu } from './Menu';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Menu />
        <Routes>
          <Route exact path="/" element={<HelloWorld />} />
          <Route path="/counters" element={<Counters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
