import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Header from "../Common/Header";

const DashboardProfile = props => {
  const { classes, theme } = props;
  const headerStyle = {
    transitionDuration: ".15s"
  };

  return (
    <div className={classes.container}>
      <Header
        styles={headerStyle}
        boxShadow="0 5px 20px rgba(35,35,80,.25)"
        color={theme.primaryWhite}
        borderRadius="8px 8px 0px 0px"
        fontSize={24}
        backgroundColor={"#6772e5"}
        padding="10px"
      >
        News
      </Header>
    </div>
  );
};

const styles = theme => ({
  container: {
    position: "relative",
    width: "400px",
    margin: "40px 20px 40px auto",
    borderBottom: "2px solid rgba(207,215,223,.25)",
    borderRadius: 8,
    backgroundColor: theme.primaryWhite,
    boxShadow:
      "0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)",
    "&:hover": {
      transform: "translateY(-1px)"
    },
    transitionDuration: ".2s"
  }
});

export default injectSheet(styles)(DashboardProfile);