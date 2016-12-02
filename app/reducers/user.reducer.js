/*
*user groups
* guest
* member
*/
const initialState = {
  user: {},
  authorized: false,
  secretToken: null,
  group: 'guest'
};

export default function(state = initialState, action) {
  switch (action.type) {
  case 'SIGNUP_SUCCESS':
  case 'SIGNIN_SUCCESS':
    return Object.assign({}, {
      user: action.auth.user,
      authorized: action.auth.authorized,
      secretToken: action.auth.secretToken,
      group: 'member'
    });
  case 'SIGNUP_FAILURE':
  case 'SIGNIN_FAILURE':
    return Object.assign({}, {
      error: action.auth.error,
      authorized: false,
      group: 'guest'
    });
  default:
    return state;
  }
}
