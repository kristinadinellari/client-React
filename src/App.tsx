import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/scss/app.scss'
//components
import Login from "./components/Login";
import MainContent from './components/Content/MainContent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={MainContent} />
        </Switch>
      </Router>
    )
  }
}
export default App;
