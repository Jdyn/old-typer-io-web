import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import Feed from "./Feed";
import Banner from "../reusable/Banner";
import PostForm from "./PostForm";
import Post from "./Post";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const Forum = props => {
  const { classes, fetchFeed, feed, fetchPost, view, match, history, isLoggedIn, post } = props;

  const renderView = () => ({
    FEED: (
      <div className={classes.container}>
        <Feed
          posts={feed.posts}
          fetchFeed={fetchFeed}
          view={view}
          isLoggedIn={isLoggedIn}
        />
      </div>
    ),
    NEW_POST: (
      <div className={classes.container}>
        <PostForm view={view} history={history} fetchFeed={fetchFeed} />
      </div>
    ),
    POST: (
      <div className={classes.container}>
        <Post
          view={view}
          match={match}
          fetchPost={fetchPost}
          post={post}
          history={history}
          isLoggedIn={isLoggedIn}
        />
      </div>
    )
  });

  return (
    <>
      <div className={classes.stripe} />
      <div className={classes.root}>
        {renderView()[view]}
        {/* <div className={classes.messages} style={{ height: "425px" }}>
          <Banner>Messages</Banner>
        </div> */}
        {/* <input className={classes.search} placeholder="Search" /> */}
        {/* <div className={classes.subjects} style={{ height: "425px" }}>
          <Banner>Subjects</Banner>
        </div> */}
      </div>
    </>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    position: "relative",
    margin: "135px auto 30px auto",
    padding: "15px",
    zIndex: 100,
    gridTemplateColumns: "265px auto 265px",
    gridTemplateRows: "min-content 1fr",
    maxWidth: "1125px",
    gridTemplateAreas: `
      ' messages main search'
      'messages main subjects'
    `
  },
  search: {
    diplay: "flex",
    position: "sticky",
    top: "25px",
    flexGrow: 1,
    gridArea: "search",
    backgroundColor: theme.white,
    border: "2px solid #e5e5e5",
    borderRadius: 16,
    fontSize: "17px",
    padding: "12px 12px 12px 50px",
    boxShadow: "0px 3px 10px rgba(30,30,70,.3)",
    overflow: "hidden",
    height: "55px",
    margin: "0 0 20px 15px"
  },
  container: {
    gridArea: "main",
    display: "flex",
    maxWidth: "565px"
  },
  messages: {
    display: "flex",
    position: "sticky",
    top: "25px",
    flexDirection: "column",
    gridArea: "messages",
    padding: "20px",
    backgroundColor: theme.primary,
    boxShadow: "0px 10px 15px rgba(30,30,70,.3)",
    borderRadius: 16,
    margin: "0 15px 0 0"
  },
  subjects: {
    display: "flex",
    position: "sticky",
    top: "90px",
    flexDirection: "column",
    gridArea: "subjects",
    padding: "20px",
    backgroundColor: theme.primary,
    boxShadow: "0px 10px 15px rgba(30,30,70,.3)",
    borderRadius: 16,
    margin: "0 0 0 15px"
  },
  stripe: {
    zIndex: 0,
    width: "100%",
    height: "95%",
    top: 0,
    overflow: "hidden",
    WebkitTransform: "skwY(-12deg)",
    transform: "skewY(-12deg)",
    WebkitTransformOrigin: 0,
    transformOrigin: 0,
    backgroundColor: theme.tertiary,
    position: "absolute"
  }
});

Forum.propTypes = propTypes;

export default withStyles(styles)(Forum);
