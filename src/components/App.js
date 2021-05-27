import React from "react";
import CommentList from "./CommentList";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomePage from "./NewPostPage";
import SignIn from "./SignIn";

class App extends React.Component {
  // componentDidMount() {
  //   fetch("http://localhost:3000")
  //     .then((response) => response.json())
  //     .then(console.log);
  // }
  render() {
    return (
      <div>
        <div className="ui container">
          <BrowserRouter>
            <div>
              <NavLink to="/posts">View All Posts</NavLink>
              <Route path="/newPost" exact component={HomePage} />
              <Route path="/posts" component={CommentList} />
              <Route path="/" exact component={SignIn} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
