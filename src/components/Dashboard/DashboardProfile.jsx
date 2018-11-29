import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import DashboardProfileHeader from "./DashboardProfileHeader";
import DashboardPaper from "./DashboardPaper";
const DashboardProfile = props => {
  const { classes, initClient, client } = props;

  return (
    <div className={classes.container}>
        <DashboardPaper>
          <DashboardProfileHeader
            initClient={initClient}
            username={client.username}
          />
        </DashboardPaper>
    </div>
  );
};

DashboardProfile.propTypes = {};

const styles = {
  container: {
    display: "flex",
    position: "relative",
    margin: "20px 0px 20px auto",
    padding: "5px 5px",
    // width: "50%"
  },
};

export default injectSheet(styles)(DashboardProfile);