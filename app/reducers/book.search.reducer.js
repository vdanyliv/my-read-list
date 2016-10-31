const initialState = {
	items: [],
	searchInProgress: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_BOOKS_SUCCESS':
			return Object.assign({}, state, {
				items: action.items,
				searchInProgress: false
			});
		return state;
		case 'FETCH_BOOKS_REQUEST':
			return Object.assign({}, state, {
				searchInProgress: true
			});
		case 'FETCH_BOOKS_FAILURE':
			return Object.assign({}, state, {
				searchInProgress: false
			});
		default:
			return state;
	}
}