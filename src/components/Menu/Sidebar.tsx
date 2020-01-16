import React from 'react';
import { NavLink } from "react-router-dom";
import useStyles from './Style';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PeopleIcon from '@material-ui/icons/People';

export default function Sidebar(props: any) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer className={classes.drawer} variant="persistent"
        anchor="left" open={props.open} classes={{ paper: classes.drawerPaper }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[{ title: 'Profile', route: '/profile', icon: '' }, { title: 'Users', route: '/users' }].map((text, index): any => (
            <NavLink to={text.route} key={index}>
              <ListItem button >
                <ListItemIcon>{index % 2 === 0 ? <PermIdentityIcon /> : <PeopleIcon />}</ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
}