const initialState = {
  loggedIn: false,
  name: 'Unknown User'
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state
        // user.loggedIn: true
      };
    default:
      return state;
  }
}
