import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import { reducer as form } from "redux-form";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  currentUser: loginReducer,
  form,
});
