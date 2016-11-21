export default function(state = [], action) {
  switch (action.type) {
  case 'BOOK_SELECT':
    return Object.assign({}, state, {
      selectedBook: action.payload
    });
  default:
    return state;
  }
}
