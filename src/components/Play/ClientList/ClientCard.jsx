import React from "react";
import withStyles from "react-jss";

const ClientCard = props => {
  const { client, classes } = props;
  const { gamePiece } = client;
  return (
    <div className={classes.card}>
      <div className={classes.username}>
        {client.username}
        <div className={classes.wpm}>
          {gamePiece.wpm} <span className={classes.statHeader}>WPM</span>
        </div>
      </div>
      <span className={classes.stat}>
        <span className={classes.statHeader}>ACCURACY</span>
        {gamePiece.accuracy}
      </span>
      <span className={classes.stat}>
        <span className={classes.statHeader}>ERRORS</span>
        {gamePiece.errors}
      </span>
      <span className={classes.stat}>
        <span className={classes.statHeader}>TIME</span>
        {gamePiece.time}
      </span>
    </div>
  );
};

const styles = theme => ({
  card: props => ({
    display: "grid",
    gridTemplateRows: "auto min-content",
    gridTemplateColumns: "1fr 1fr 1fr",
    margin: "0",
    borderLeft: `2px solid ${theme.divider}`,
    backgroundColor: theme.primaryWhite,
    "&:first-child": {
      border: "none",
      borderRadius: "8px 0px 0px 8px"
    },
    "&:last-child": {
      borderRadius: "0px 8px 8px 0px"
    },
    maxWidth: "233px",
    transitionDuration: ".5s",
    "&:only-child": { 
      borderRadius: 8
    },
    width: "25%",
    overflow: "hidden",
    ...props.style
  }),
  username: props => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: props.color, //"#555abf",
    boxShadow: "0 1px 5px rgba(50,50,93,.25)",
    fontWeight: 600,
    lineHeight: "25px",
    height: "35px",
    overflow: "hidden",
    margin: "5px 5px 5px 5px",
    borderRadius: 4,
    color: theme.primaryWhite,
    padding: "5px 10px 5px 10px",
    gridRow: "2 / 3",
    gridColumn: "1 / 4"
  }),
  wpm: {
    margin: "auto 0px auto auto",
    backgroundColor: "",
    fontSize: 20,
    textAlign: "center",
    color: theme.primaryWhite //"#616161"
  },
  statHeader: {
    fontSize: 12
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    verticalAlign: "middle",
    color: "#8E8D8F",
    fontWeight: 600,
    height: "50%",
    margin: "5px auto auto auto"
  }
});

export default withStyles(styles, { injectTheme: true })(ClientCard);
