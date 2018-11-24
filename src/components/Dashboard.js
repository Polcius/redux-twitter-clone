import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map(id => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// mapStateToProps is the way to retrieve data from the store. The name says it all. We need to connect it in the end.

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
