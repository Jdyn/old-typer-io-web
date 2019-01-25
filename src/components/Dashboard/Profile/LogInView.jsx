import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import Input from "../../Common/Input";
import Button from "../../Common/Button";

const propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  changeProfile: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const LogInView = props => {
  const { classes, theme, session, changeProfile, login } = props;
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    login(form);
  };

  return (
    <div className={classes.inner}>
      <button
        className={classes.exitButton}
        onClick={() => changeProfile("BACK")}
      >
        <svg
          className={classes.exitSVG}
          width="35"
          height="35"
          viewBox="0 0 25 25"
        >
          <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
        </svg>
      </button>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Input
          value={form.email}
          color={theme.divider}
          onChange={event => setForm({ ...form, username: event.target.value })}
          placeholder="username"
          autoComplete="username"
        />
        <Input
          type="password"
          value={form.password}
          color={theme.divider}
          onChange={event => setForm({ ...form, password: event.target.value })}
          placeholder="password"
          autoComplete="current-password"
        />
        <Button
          onClick={event => handleSubmit(event)}
          type="submit"
          backgroundColor={"#6772e5"}
          width="100%"
          margin="5px auto 0px auto"
          color={theme.primaryWhite}
          activeColor={"#fafafa80"}
        >
          Log In
        </Button>
        {session.errored && <p>{session.errors.error}</p>}
      </form>
    </div>
  );
};

LogInView.propTypes = propTypes;

const styles = theme => ({
  inner: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    height: "100%",
    width: "275px"
  },
  form: {
    width: "75%",
    margin: "15px auto 0px auto"
  },
  exitButton: {
    height: "32px",
    width: "32px",
    padding: 0,
    margin: "10px 10px 0 auto",
    border: "none",
    outline: "none",
    cursor: "pointer",
    background: "transparent",
    transitionDuration: ".15s",
    "&:hover": {
      transform: "translateY(-2px)"
    },
    "&:active": {
      color: "",
      transform: "translateY(2px)"
    }
  },
  exitSVG: {
    fill: "#6772e5"
  }
});

export default withStyles(styles, { injectTheme: true })(LogInView);
