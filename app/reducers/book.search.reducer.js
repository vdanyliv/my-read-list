export default function(state = [], action) {
	switch (action.type) {
		case 'BOOK_SEARCH':
			//logic for filtering and returning object
			return [{
				id: 1,
				author: "test"
		    }];
		default:
			return state;
	}
}