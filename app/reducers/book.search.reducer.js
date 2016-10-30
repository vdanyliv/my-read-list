export default function(state = [], action) {
	switch (action.type) {
		case 'BOOK_SEARCH':
			if (action.name) {
				state = action.books.filter((item) => {
					if (item.book.match(action.name)) {
						return item;
					}
				});
			}
			
			return state;
		default:
			console.error('default state');
			return state;
	}
}