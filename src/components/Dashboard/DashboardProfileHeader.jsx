import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

class DashboardProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.username ? this.props.username : ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { updateClient, username } = this.props;
    event.preventDefault();
    const name = this.state.value;
    if (name !== username) {
      if (name !== null) {
        updateClient({ username: name });
      }
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit} className={classes.container}>
          <input
            className={classes.nameInput}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="username"
          />
          <div className={classes.divider} />
          <button type="submit" className={classes.setButton}>Set</button>
        </form>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "275px",
    width: "275px",
    marginBottom: "auto"
  },
  divider: {
    display: "flex",
    position: "relative",
    height: "2px",
    margin: "auto",
    border: "none",
    flexShrink: 0,
    width: "65%",
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  },
  nameInput: {
    textAlign: "center",
    backgroundColor: theme.primaryWhite,
    maxWidth: "165px",
    margin: "25px auto 0 auto",
    padding: "10px 10px 0px 10px",
    fontSize: 24,
    color: "",//"#6772e5",
    border: "none",
    outline: "none",
    "&::placeholder": {
      color: "",
    },
  },
  setButton: {
    border: "none",
    cursor: "pointer",
    outline: "none",
    width: "65%",
    margin: "5px auto 0px auto",
    padding: "10px",
    fontSize: 18,
    border: "2px solid rgba(0,0,0,.05)",
    borderRadius: 8,
    backgroundColor: theme.primaryWhite,
    transitionDuration: ".15s",
    "&:hover": {
      transform: "translateY(-2px)",
    },
    "&:active": {
      color: "#6772e5",
      transform: "translateY(2px)",
    }
  }
});

export default injectSheet(styles)(DashboardProfileHeader);
