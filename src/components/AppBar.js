import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Home from "../Pages/Home";
import Menu from '../Pages/Menu';
import Orders from '../Pages/Orders';
import Notifications from "../Pages/Notifications";
import Admin from '../Pages/Admin';
import Staff from '../Pages/Staff';
import Users from '../Pages/Users/Users';



const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "whitesmoke"
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    backgroundColor: "#ffffff"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  },
  aboveDrawer : {
    backgroundColor: "#ffffff",
    color: "#fb9937"
  },
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar className={classes.aboveDrawer}
      >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            {title}
          </Typography>
            <Typography>
                WELCOME ADMIN  
            </Typography>
            <SupervisorAccountIcon/>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
);

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
    <Drawer variant={variant} open={open} onClose={onClose}
                classes={{
                  paper: classes.drawerPaper
                }}
    >
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === 'persistent'
        })}
      />
       <br></br>
      <List>
        <ListItem button component={Link} to="/" onClick={onItemClick('Home')}>
        <ListItemIcon>
            <DashboardIcon/>
        </ListItemIcon>
          <ListItemText   >Home</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/Menu" onClick={onItemClick('Menu')}>
        <ListItemIcon>
            <MenuBookIcon/>
        </ListItemIcon>
          <ListItemText>Menu</ListItemText> 
        </ListItem>
        <ListItem button component={Link} to="/Orders" onClick={onItemClick('Orders')}>
        <ListItemIcon>
            <ShoppingCartIcon/>
        </ListItemIcon>
          <ListItemText>Orders</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/Notifications" onClick={onItemClick('Notification')}>
        <ListItemIcon>
            <NotificationsActiveIcon/>
        </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </ListItem>
    
      <Divider/>
      <ListItem button component={Link} to="/Admin" onClick={onItemClick('Admin')}>
        <ListItemIcon>
        <SupervisorAccountIcon/>
        </ListItemIcon>
          <ListItemText>Admin</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/Staff" onClick={onItemClick('Staff')}>
        <ListItemIcon>
            <PeopleAltIcon/>
        </ListItemIcon>
          <ListItemText>Staff</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/Users" onClick={onItemClick('Users')}>
        <ListItemIcon>
            <AccountCircleIcon/>
        </ListItemIcon>
          <ListItemText>Users</ListItemText>
        </ListItem>
        </List>
     
     
    </Drawer>
    <main className={classes.content}>
        <Route exact path="/" component={Home} />
        <Route path="/Menu" component={Menu} />
        <Route path="/Orders" component={Orders} />
        <Route path="/Notifications" component={Notifications} />
        <Route path="/Admin" component={Admin} />
        <Route path="/Staff" component={Staff} />
        <Route path="/Users" component={Users} />
    </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('Home');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);