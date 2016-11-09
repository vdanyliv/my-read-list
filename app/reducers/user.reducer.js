const initialState = {
  user: {},
  authorized: false
};

export default function(state = initialState, action) {
  switch (action.type) {
  case 'AUTHORIZE_SUCCESS':
    return Object.assign({}, state, {
      user: action.user,
      authorized: true
    });
  case 'REGISTRATION_REQUEST':
    return state;
  case 'REGISTRATION_SUCCESS':
    return state;
  case 'REGISTRATION_FAIL':
    return state;
  default:
    return state;
  }
}
