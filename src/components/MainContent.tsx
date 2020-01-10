import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../components/Content/Menu/Nav";
import Sidebar from "../components/Content/Menu/Sidebar"


class MainContent extends React.Component {
  render() {
    return (
        <div id="MainContent" className="mainContent">
          <Nav/>
          <Sidebar/>
          <div className="content">
            here on content
          </div>
        </div>
    );
  }
}
export default MainContent;
