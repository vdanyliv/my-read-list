const initialState = {
  user: {},
  authorized: false,
  secretToken: null
};

export default function(state = initialState, action) {
  switch (action.type) {
  case 'SIGNIN_SUCCESS':
    return Object.assign({}, state, {
      user: action.auth.user,
      authorized: action.auth.authorized,
      secretToken: action.auth.secretToken
    });
  case 'SIGNIN_FAILURE':
    return Object.assign({}, state, {
      error: action.auth.error,
      authorized: false
    });
  case 'SIGNUP_REQUEST':
    return state;
  case 'SIGNUP_SUCCESS':
    return state;
  case 'SIGNUP_FAIL':
    return state;
  default:
    return state;
  }
}
