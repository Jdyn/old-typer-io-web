import React from "react";
import injectSheet from "react-jss";
import PlayInputEditor from "./PlayInputEditor";

const PlayInputContent = ({ classes, inputDidUpdate, wordsComplete, inputIsWrong }) => {

  return (
    <div className={classes.content}>
      {wordsComplete.map((word, index) => {
        return (
          <span key={index} className={classes.word}>
            {word}
          </span>
        ); 
      })}
      <PlayInputEditor inputDidUpdate={inputDidUpdate} inputIsWrong={inputIsWrong}/>
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
    fontSize: "28px",
    fontWeight: "400",
    color: '#24b47e',
    textShadow: '0px 0px .5px rgba(50,50,93,.25)',
  },
  word: {
    lineHeight: "40px",
    padding: "0px 5px",
    "&:first-child": {
      paddingLeft: "0px !important"
    }
  }
};

export default injectSheet(styles)(PlayInputContent);
