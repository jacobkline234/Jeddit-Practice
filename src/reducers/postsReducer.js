export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "NEW_POST":
      let newPosts = state.map((post) => post);
      newPosts.push(action.payload);
      return newPosts;
    default:
      return state;
  }
};
