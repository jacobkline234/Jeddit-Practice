import React from "react";
import { signIn, fetchPostsAndUsers } from "../actions/index";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
    this.submitted = false;
  }
  componentDidMount() {
    this.props.fetchPostsAndUsers();
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
    signIn(this.state.signInEmail, this.state.signInPassword)(
      this.props.dispatch,
      this.props.getState
    );
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <header>Jeddit</header>
        <form onSubmit={this.handleSubmit}>
          <Field
            name="email"
            type="text"
            component={this.renderInput}
            onChange={this.onEmailChange}
            value={this.state.signInEmail}
            label="Enter Email:"
          />
          <Field
            name="password"
            type="password"
            component={this.renderInput}
            onChange={this.onPasswordChange}
            value={this.state.signInPassword}
            label="Enter Password:"
          />
          <button type="submit">Submit Post</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { signIn: state.signIn };
};

export default reduxForm({ form: "signIn" })(
  connect(mapStateToProps, { signIn, fetchPostsAndUsers })(SignIn)
);
