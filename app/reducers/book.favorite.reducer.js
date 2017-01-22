export default function(state = {}, action) {
  switch (action.type) {
  case 'ADD_TO_FAVORITE':
    return Object.assign({}, state, {
      book: action.payload
    });
  case 'GET_FAVORITE_SUCCESS':
    return Object.assign({}, state, {
      bookList: action.payload
    });
  default:
    return state;
  }
}
