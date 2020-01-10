import React from 'react'
import './assets/scss/app.scss'


import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

//components
import Login from "./components/Login";
import MainContent from './components/MainContent';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Route exact path="/login" component={Login}/>
          <Route path="/content" component={MainContent} />
        </Router>
    )
  }
}

export default App;
