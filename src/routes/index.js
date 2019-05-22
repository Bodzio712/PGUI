import React from "react";
import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Lists from "../pages/Lists";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

const history = createBrowserHistory();

const Routes = props => {
  const { classes } = props;

  return (
    <div>
      <Router history={history}>
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {/* <div className={classes.toolbar} /> */}
            <List>
              <ListItem button component={Link} to="/lists">
                <ListItemText primary="Actor 1" />
              </ListItem>
              <ListItem button component={Link} to="/lists">
                <ListItemText primary="Actor 2" />
              </ListItem>
              <ListItem button component={Link} to="/lists">
                <ListItemText primary="Actor 3" />
              </ListItem>
              <ListItem button component={Link} to="/lists">
                <ListItemText primary="Actor 4" />
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            {/* <div className={classes.toolbar} /> */}
            <Route path="/lists" component={Lists} />
          </main>
        </div>
      </Router>
    </div>
  );
};

Routes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);
