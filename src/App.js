import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { FormEditor, FormRenderer } from './formeo';

function App() {
  return (
    <div className="App">
      <FormEditor />
      <FormRenderer />
    </div>
  );
}

export default App;
