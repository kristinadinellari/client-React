import React from 'react'
import { Provider } from 'react-redux';
import { store } from './redux/storeConfig'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/scss/app.scss'
//components
import Login from "./components/Login";
import MainContent from './components/MainContent';

class App extends React.Component {
  render() {
    console.log(store.getState(), 'store ne app')
    return (
        <Provider store={store}>
          <Router>
            <Route exact path="/login" component={Login}/>
            <Route path="/content" component={MainContent} />
          </Router>
        </Provider>
    )
  }
}

export default App;
