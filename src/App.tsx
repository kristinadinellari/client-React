import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './assets/scss/app.scss';
// components
import Login from "./components/Login";
import MainContent from './components/Content/MainContent';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={() => {
            const user: any = localStorage.getItem('user');
            const userObj = JSON.parse(user);
            if (userObj && userObj.firstName) {
              return <MainContent />;
            } else {
              return <Redirect to='/login' />;
            }
          }} />
        </Switch>
      </Router>
    );
  }
}
export default App;
