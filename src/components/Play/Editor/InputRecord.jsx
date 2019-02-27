import React from "react";
import withStyles from "react-jss";
import Input from "./Input";

const InputRecord = props => {
  const {
    classes,
    words,
    wordsComplete,
    wordsRemaining,
    editorUpdate,
    isWrong,
    gameboard,
    socket,
    client,
    room
  } = props;

  return (
    <div className={classes.content}>
      {/* {wordsComplete.map((word, index) => {
        return (
          <span key={index} className={classes.word}>
            {word}
          </span>
        );
      })} */}
      <Input
        editorUpdate={editorUpdate}
        words={words}
        isWrong={isWrong}
        gameboard={gameboard}
        room={room}
        socket={socket}
        client={client}
        wordsComplete={wordsComplete}
        wordsRemaining={wordsRemaining}
      />
    </div>
  );
};

const styles = {
  content: {
    display: "flex",
    justifyContent: "flex-end",
    height: "95%",
    width: "auto",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "400",
    color: "#24b47e",
    textShadow: "0px 0px .5px rgba(50,50,93,.25)"
  },
  word: {
    lineHeight: "40px",
    padding: "0px 5px",
    "&:first-child": {
      paddingLeft: "0px !important"
    }
  }
};

export default withStyles(styles)(InputRecord);
