import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Provider from './Context'

import './App.css'

function App() {
  
  return (
     <Navbar/>
  );
};

export default App;
