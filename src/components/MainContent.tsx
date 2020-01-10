import React from "react";
import { Route } from 'react-router-dom'
import Sidebar from "../components/Content/Menu/Sidebar"
import Profile from "../components/Content/User/Profile"

class MainContent extends React.Component {
  render() {
    return (
        <div id="MainContent" className="mainContent">
          <Sidebar/>
          <div className="content">
            <Route
                exact
                path="/profile"
                component={Profile}/>
          </div>
        </div>
    );
  }
}
export default MainContent;
