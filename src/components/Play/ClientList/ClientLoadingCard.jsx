import React from "react";
import withStyles from "react-jss";
import CommonTitle from "../../CommonComponents/commonTitle";

const ClientLoadingCard = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <CommonTitle color="black">Looking for Players...</CommonTitle>
    </div>
  );
};

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    minWidth: "245px",
    margin: "10px",
    backgroundColor: theme.secondaryWhite,
    borderRadius: 8
  },
  wpm: {}
});

export default withStyles(styles)(ClientLoadingCard);
