import React from "react";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
  renderNavBar() {
    return (
      <div className="ui left visible inverted vertical sidebar">
        <a class="item">
          <Link to="/">Home</Link>
          <br />
        </a>
        <a class="item">
          <Link to="/posts">Posts</Link>
        </a>
      </div>
    );
  }

  render() {
    return <div>{this.renderNavBar()}</div>;
  }
}

export default NavigationBar;
