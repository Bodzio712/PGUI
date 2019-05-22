import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    width: "100%"
  },
  listItem: {
    display: "flex"
  },
  listInner: {
    marginRight: 40,
    width: 350,
    backgroundColor: theme.palette.background.paper
  },
  listMainSVG: {
    marginRight: 10,
    width: 1000,
    height: 1000,

    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class SimpleList extends Component {
  state = {
    open: true,
    checked: ["wifi"]
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.listItem}>
          <div className={classes.listInner}>
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Option 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Option 2" />
              </ListItem>
            </List>
            <Divider />

            <List component="nav">
              <ListItem button>
                <ListItemText primary="Option 3" />
              </ListItem>
              <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Option 4" />
              </ListItem>
            </List>
            <Divider />

            <List component="nav">
              <ListItem button>
                <ListItemText primary="Option 5" />
              </ListItem>
              <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Option 6" />
              </ListItem>
            </List>
            <Divider />
          </div>

          <div className={classes.listMainSVG}>
            <svg width="800" height="800">
              <rect x="0" y="0" stroke="black" stroke-width="1" />
              <circle
                cx="350"
                cy="400"
                r="40"
                fill="blue"
                stroke="black"
                stroke-width="1"
              >
                <animateMotion
                  path="M 0 0 H 300 Z"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
