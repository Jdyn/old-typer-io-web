import React, { Fragment } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const propTypes = {
  initClient: PropTypes.func.isRequired,
  username: PropTypes.string,
}

const DashboardProfileHeader = props => {
  const { initClient, username, classes } = props;
  var input = null;

  const handleSubmit = event => {
    event.preventDefault();

    if (input.value !== username) {
      const name = input.value;
      if (name == null) {
        const name = "nullclient";
        initClient(name);
      } else {
        initClient(name);
      }
    }
  };

  return (
    <Fragment>
      <form
        onSubmit={event => handleSubmit(event)}
        className={classes.container}
      >
        <input
          className={classes.nameInput}
          placeholder="name"
          type="text"
          ref={element => {
            input = element;
          }}
        />
      </form>
    </Fragment>
  );
};

DashboardProfileHeader.propTypes = propTypes;

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    maxWidth: "275px",
    width: "275px"
  },
  nameInput: {
    flex: "100px",
    textAlign: "center",
    backgroundColor: theme.primaryWhite,
    maxWidth: "165px",
    margin: "25px auto 0 auto",
    height: "40px",
    padding: "10px",
    transition: "background-color .1s ease-in,color .1s ease-in",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: theme.primaryWhite,
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 26,
    border: "none",
    outline: "none",

    "&:focus": {
      backgroundColor: "#f6f9fc",
      borderColor: "#e4effa",
      borderStyle: "solid"
    }
  }
});

export default injectSheet(styles)(DashboardProfileHeader);
