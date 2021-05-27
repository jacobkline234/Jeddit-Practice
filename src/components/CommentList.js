import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import UserHeader from "./UserHeader";

class CommentList extends React.Component {
  //Will need to fetch specific Posts as opposed to entire page of posts

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to="/newPost">Create New Post</Link>
        <div className="ui relaxed divided list">{this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps)(CommentList);
