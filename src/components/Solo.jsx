import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import ClientList from "./Play/ClientList";
import Gameboard from "./Play/Gameboard";
import Editor from "./Play/Gameboard/Editor";
import { silentEmit } from "../services/socket";
import PlayStatus from "./Play/Status";
import Leaderboard from "./Play/Leaderboard";

const propTypes = {
  classes: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  gameboard: PropTypes.object.isRequired,
  socket: PropTypes.object.isRequired,
  initSocket: PropTypes.func.isRequired,
  leaveRoom: PropTypes.func.isRequired
};

const Solo = props => {
  const { client, room, socket, gameboard, leaveRoom, classes } = props;

  const [gameState, setGameState] = useState({
    currentInput: "",
    currentWord: "",
    currentIndex: 0,
    words: [],
    wordsRemaining: [],
    wordsComplete: []
  });

  const [editorState, setEditorState] = useState({
    wrongIndex: null,
    entries: 0,
    errors: 0
  });

  // When the component unmounts, signal the server that the client is leaving.
  useEffect(() => {
    return () => {
      leaveRoom({ id: room.id, errored: false });
    };
  }, []);

  // Once the quote has loaded, update the gameboard accordingly.
  useEffect(() => {
    setGameState({
      ...gameState,
      currentWord: gameboard.words[0] || "",
      currentIndex: 0,
      words: gameboard.words,
      wordsRemaining: gameboard.words,
      wordsComplete: []
    });
  }, [gameboard.words]);

  const inputDidUpdate = event => {
    setGameState({ ...gameState, currentInput: event.target.value });
  };

  const submitWord = () => {
    const { wordsRemaining, words, currentIndex } = gameState;
    const temp = [...wordsRemaining];
    const removed = temp.shift();

    // + 1 includes the space key
    const newEntries = words[currentIndex].length + 1;
    const newIndex = currentIndex;

    const payload = {
      entries: newEntries,
      position: newIndex,
      errors: editorState.errors
    };

    silentEmit("CLIENT_UPDATE", payload);

    setGameState(prev => ({
      ...gameState,
      currentInput: "",
      currentIndex: prev.currentIndex + 1,
      currentWord: prev.words[prev.currentIndex + 1],
      wordsRemaining: temp,
      wordsComplete: [...prev.wordsComplete, removed]
    }));
  };

  return (
    <>
      <div className={classes.stripe} />
      <div className={classes.root}>
        <ClientList room={room} gameboard={gameboard} socket={socket} />
        <PlayStatus gameboard={gameboard} room={room} socket={socket} />
        <Leaderboard />
        <Gameboard
          gameState={gameState}
          editorState={editorState}
          client={client}
          room={room}
          gameboard={gameboard}
          setEditorState={setEditorState}
          inputDidUpdate={inputDidUpdate}
          submitWord={submitWord}
        />
        <Editor
          currentWord={gameState.currentWord}
          gameboard={gameboard}
          gameState={gameState}
          setEditorState={setEditorState}
          isWrong={editorState.wrongIndex !== null}
          input={gameState.currentInput}
          inputDidUpdate={inputDidUpdate}
          submitWord={submitWord}
        />
      </div>
    </>
  );
};

Solo.propTypes = propTypes;

const styles = theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "265px auto 265px",
    gridTemplateRows: "min-content auto 1fr",
    gridTemplateAreas: `
    'status gameboard leaderboard'
    'clientlist gameboard leaderboard'
    'clientlist editor leaderboard'
    `,
    maxWidth: "1125px",
    flexDirection: "row",
    position: "relative",
    padding: "15px",
    margin: "135px auto 30px auto",
    height: "100%"
  },
  stripe: {
    zIndex: -1,
    width: "100%",
    height: "95%",
    overflow: "hidden",
    WebkitTransform: "skwY(-12deg)",
    transform: "skewY(-12deg)",
    WebkitTransformOrigin: 0,
    transformOrigin: 0,
    backgroundColor: theme.tertiary,
    position: "absolute"
  }
});

export default withStyles(styles)(Solo);
