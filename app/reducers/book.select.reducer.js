export default function(state = [], action) {
	const initialState = {
		books: [],
		search: []
	}

	switch (action.type) {
		case 'BOOK_SELECT':
			return Object.assign({}, state, {
				selectedBook: action.payload
			});
		case 'BOOK_SEARCH':
			console.error(state, action, 'BOOK_SEARCH');
		default:
			return state;
	}
}