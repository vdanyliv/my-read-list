export const selectBook =  (bookItem) => {
	return {
		type: 'BOOK_SELECT',
		payload: bookItem
	}
} 