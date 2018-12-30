import React from "react";
import injectSheet from "react-jss";

const InputPrompt = ({
  classes,
  wordsRemaining,
}) => { 
  const filtered = []

  for(let i = 0; i < 8; i++) {
    filtered.push(wordsRemaining[i])
  }

  return (
    <div className={classes.prompt}>
      {filtered.map((word, index) => {
        return (
          <span key={index} className={classes.word}>
            {word}
          </span>
        );
      })}
    </div>
  );
};

const styles = theme => ({
  prompt: {
    display: "flex",
    justifyContent: "flex-start",
    height: "95%",
    width: "auto",
    lineHeight: "40px",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: "400",
    color: props => props.isStarted ? '#0d2b3e' : '#0d2b3e30',
    transition: "color 0.5s",
    textShadow: '0px 0px .5px rgba(50,50,93,.25)',
  },
  word: {
    lineHeight: "40px",
    padding: "0px 5px",
    opacity: props => props.isStarted ? 1 : 0.4,
    "&:first-child": {
      paddingLeft: "0px !important"
    }
  }
});

export default injectSheet(styles)(InputPrompt);
