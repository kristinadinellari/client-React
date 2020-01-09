import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';

//components
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return (
        <Router>
          <Route exact path="/login" component={Login}/>
        </Router>
    )
  }
}

export default App;
