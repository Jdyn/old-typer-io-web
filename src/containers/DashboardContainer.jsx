import React, { Component } from "react";
import Dashboard from "../components/Dashboard";
import { connect } from "react-redux";
import { updateClient, initSocket } from "../actions/ClientActions";
import { handleAuth } from "../actions/SessionActions";
import { deleteMatch } from "../actions/MatchHistoryActions";

class DashboardContainer extends Component {
  componentDidUpdate() {
    if (this.props.socket.connected) {
      switch (this.props.socket.mode) {
        case "MULTIPLAYER":
          this.props.history.push("/play");
          break;
        case "SOLO":
          this.props.history.push("/solo");
          break;
        default:
          break;
      }
    }
  }

  render() {
    return <Dashboard {...this.props} />;
  }
}

const mapStateToProps = state => ({
  client: state.client.meta,
  matches: state.matchHistory.matches,
  session: state.session,
  room: state.client.room,
  socket: state.client.socket
});

const mapDispatchToProps = dispatch => ({
  updateClient: object => dispatch(updateClient(object)),
  initSocket: (user, config) => dispatch(initSocket(user, config)),
  handleAuth: (form, type) => dispatch(handleAuth(form, type)),
  deleteMatch: index => dispatch(deleteMatch(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
