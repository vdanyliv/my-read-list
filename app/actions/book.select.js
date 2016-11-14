export const BOOK_SELECT = 'BOOK_SELECT';
export const BOOK_SEARCH = 'BOOK_SEARCH';

export const selectBook = bookItem => {
  return {
    type: BOOK_SELECT,
    payload: bookItem
  };
};
