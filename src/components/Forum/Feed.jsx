import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import Filter from "../reusable/Filter";
import FeedItem from "./FeedItem";
import Navigator from "./Navigator";
import Banner from "../reusable/Banner";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const Feed = props => {
  const { classes, posts, view, isLoggedIn } = props;

  const filters = [
    {
      name: "Popular"
    },
    {
      name: "New"
    },
    {
      name: "followed"
    }
  ];

  useEffect(() => {}, []);

  return (
    <div className={classes.container}>
      <Banner>Forum</Banner>
      <Navigator view={view} isLoggedIn={isLoggedIn} />
      <div className={classes.filter}>
        <Filter extended filters={filters} padding="0 15px 15px 15px" onClick={() => {}} />
      </div>
      <ul className={classes.feed}>
        {posts.map((post, index) => (
          <FeedItem key={index} index={index} post={post} />
        ))}
      </ul>
    </div>
  );
};

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: 16,
    boxShadow: "0px 10px 15px rgba(30,30,70,.3)",
    backgroundColor: theme.primary,
    minHeight: "765px",
    flexGrow: 1
  },
  feed: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
});

Feed.propTypes = propTypes;

export default withStyles(styles)(Feed);
