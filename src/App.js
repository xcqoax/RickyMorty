import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './Components/home/HomePage'



export default function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  )
}
