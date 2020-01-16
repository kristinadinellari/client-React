import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import clsx from 'clsx';
import useStyles from '../Menu/Style';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from '../Menu/Sidebar';
import Nav from '../Menu/Nav';
import UserList from './User/List';
import UserProfile from './User/Profile';

export default function MainContent() {
  const classes = useStyles();

  // here we have used hooks where the first el of array is the current state and 
  // the second will be the function that we call to update state

  // inside the useState is the first value of state ex: open = false;
  
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav handleDrawerOpen={handleDrawerOpen} open={open} />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      <main className={clsx(classes.content, { [classes.contentShift]: open, })}>
        <div className={classes.drawerHeader} />
        <Switch>
          <Route path="/users" component={UserList} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </main>
    </div>
  );
}
