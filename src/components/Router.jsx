import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashboardContainer from "../containers/DashboardContainer";
import PlayContainer from "../containers/PlayContainer";
import SoloContainer from "../containers/SoloContainer";
import LobbyContainer from "../containers/LobbyContainer";
import ForumContainer from "../containers/ForumContainer";

const routes = {
  home: "/",
  play: "/play",
  solo: "/solo",
  lobby: "/lobby",
  forum: "/forum"
};

const Router = () => (
  <Switch>
    <Route exact path={routes.home} component={DashboardContainer} />
    <Route exact path={routes.play} component={PlayContainer} />
    <Route exact path={routes.forum} component={ForumContainer} />
    <Route exact path={routes.solo} component={SoloContainer} />
    <Route exact path={routes.lobby} component={LobbyContainer} />
    <Route exact path={`${routes.play}/:roomId`} component={PlayContainer} />
    <Redirect to={routes.home} />
  </Switch>
);

export default Router;
