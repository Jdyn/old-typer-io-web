import React from "react";
import { useTransition, config } from "react-spring";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import ClientCard from "./ClientCard";

const propTypes = {
  room: PropTypes.object.isRequired,
  gameboard: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const ClientList = props => {
  const { room, classes, socket } = props;

  const transitions = useTransition(room.clients, client => client.id, {
    from: {
      opacity: 0,
      overflow: "hidden",
      width: "0%",
      transform: "translate3d(0, -100%, 0)"
    },
    enter: item => async (next, cancel) => {
      await next({ width: room.isSolo ? "100%" : "25%" });
      await next({ opacity: 1, transform: "translate3d(0, 0%, 0)" });
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, -100%, 0)",
      width: "0%"
    },
    config: config.wobbly
  });

  return (
    <div className={classes.container}>
      {socket.connected && (
        <div className={classes.inner}>
          {transitions.map(({ item, props, key }) => (
            <ClientCard
              style={props}
              client={item}
              color={item.gamePiece.color || "grey"}
              key={key}
            />
          ))}
        </div>
      )}
    </div>
  );
};

ClientList.propTypes = propTypes;

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    gridArea: "clientlist",
    marginBottom: "15px",
    position: "relative",
    height: "115px",
    backgroundClip: "padding-box",
    // border: "1px solid rgba(0,0,0,.05)",
    // boxShadow: "0px 0px 15px 0px rgba(50,50,93,.25)",
    borderRadius: 8,
    backgroundColor: "transparent" //theme.primaryWhite
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    zIndex: 50,
    margin: 0 //"0 auto"
  }
});

export default withStyles(styles)(ClientList);