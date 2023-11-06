import logo from './logo.svg';
import './App.css';
import React from "react";
import Show from "./app/motion";

function App() {
  return (
    <div className="App">
        <React.StrictMode>
            <Show />
        </React.StrictMode>
    </div>
  );
}

export default App;
