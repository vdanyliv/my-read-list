/*ACTION TYPE*/
export const BOOK_SELECT = 'BOOK_SELECT';
export const BOOK_SEARCH = 'BOOK_SEARCH';

/*ACTION CREATORS*/
export const selectBook =  (bookItem) => {
	return {
		type: BOOK_SELECT,
		payload: bookItem
	}
} 

export const bookSearch = (search) => {
	return {
		type: BOOK_SEARCH,
		name: search.value,
		books: search.books
	}
}