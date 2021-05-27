import { database } from "../apis/dummyAPI";

const fetchPosts = (posts) => (dispatch) => {
  dispatch({ type: "FETCH_POSTS", payload: posts });
};

const fetchUsers = (users) => (dispatch) => {
  dispatch({ type: "FETCH_USERS", payload: users });
};

export const signIn = (email, password) => (dispatch) => {
  dispatch({ type: "SIGN_IN", payload: { email, password } });
};

export const newPost = (userId, title, content) => (dispatch, getState) => {
  let postId = 1;
  const posts = getState.posts;
  postId = posts[posts.length - 1].id + 1;
  const post = {
    userId,
    id: postId,
    title,
    content,
    comments: [],
  };

  dispatch({
    type: "NEW_POST",
    payload: post,
  });
};

export const fetchPostsAndUsers = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => dispatch(fetchPosts(posts)));
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => dispatch(fetchUsers(users)));
};

//MEMOIZED FETCHUSER
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
