export default (state = [], action) => {
  switch (action.type) {
    case "SIGN_IN":
      let signedIn = true;
      // const { signInEmail, signInPassword } = action.payload;
      // state.users.forEach((e) => {
      //   if (e.email === signInEmail && e.password === signInPassword) {
      //     signedIn = true;
      //   }
      // });
      if (signedIn) {
        const currentUser = {
          email: action.payload.email,
          // password: action.payload.password,
        };
        return currentUser;
      }

    case "SIGN_OUT":
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
