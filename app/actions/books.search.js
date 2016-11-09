import axios from 'axios';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';

export const booksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  };
};

export const booksRequestFailure = () => {
  return {
    type: FETCH_BOOKS_FAILURE
  };
};

export const booksRequestSuccess = items => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    items
  };
};

export const requestSearch = keyword => {
  return dispatch => {
    dispatch(booksRequest());
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + keyword)
    .then(response => {
      if (response.data.items.length) {
        dispatch(booksRequestSuccess(response.data.items));
      }
    })
    .catch(() => {
      dispatch(booksRequestFailure());
    });
  };
};
