import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Task1 from "./Task1.jsx";
import Counter from "./Counter.jsx";
import SearchFilter from "./SearchFilter.jsx";

function App() {
  return (
    <Router>
      <div className="App" >
        <nav>
          <ul>
            <li><Link to="/" >Task 1</Link></li>
            <li><Link to="/Counter">Task 2</Link></li>
            <li><Link to="/SearchFilter">Task 3</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Task1/>}/>
          <Route path="Counter" element={<Counter/>}/>
          <Route path="SearchFilter" element={<SearchFilter/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
