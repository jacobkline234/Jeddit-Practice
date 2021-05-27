import React from "react";
import { newPost } from "../actions/index";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class NewPostPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  renderInput({ input, label }) {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    newPost(
      1,
      this.props.title,
      this.props.content
    )(this.props.dispatch, this.props.getState);
  };

  render() {
    return (
      <div>
        <header>I am a HomePage</header>
        <form onSubmit={this.handleSubmit}>
          <Field
            name="title"
            type="text"
            component={this.renderInput}
            label="Enter Title:"
          />
          <Field
            name="content"
            type="text"
            component={this.renderInput}
            label="Enter Content:"
          />
          <button type="submit">Submit Post</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts, ...state };
};

export default reduxForm({ form: "newPost" })(
  connect(mapStateToProps, { newPost })(NewPostPage)
);
