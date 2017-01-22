import axios from 'axios';

export const BOOK_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const BOOK_TO_FAVORITE_SUCCESS = 'ADD_TO_FAVORITE_SUCCESS';
export const BOOK_TO_FAVORITE_FAILED = 'ADD_TO_FAVORITE_FAILED';
export const BOOK_GET_FAVORITE_SUCCESS = 'GET_FAVORITE_SUCCESS';

export const bookToFavoriteSuccess = () => {
  return {
    type: BOOK_TO_FAVORITE_SUCCESS
  };
};

export const bookToFavoriteFailed = () => {
  return {
    type: BOOK_TO_FAVORITE_FAILED
  };
};

export const bookGetFavoriteSuccess = list => {
  return {
    type: BOOK_GET_FAVORITE_SUCCESS,
    payload: list
  };
};

export const bookToFavorite = (auth, bookItem) => {
  return dispatch => {
    axios.post('http://localhost:9001/addToFavorite', {
      userId: auth.user.id,
      id: bookItem.id,
      etag: bookItem.etag,
      volumeInfo: bookItem.volumeInfo
    })
    .then(() => {
      dispatch(bookToFavoriteSuccess());
    })
    .catch(() => {
      dispatch(bookToFavoriteFailed());
    });
  };
};

export const bookGetFavorite = auth => {
  return dispatch => {
    axios.post('http://localhost:9001/retrieveFavorite', {
      _id: auth.user.id
    })
    .then(list => {
      dispatch(bookGetFavoriteSuccess(list.data));
    })
    .catch(() => {
      dispatch(bookGetFavoriteSuccess());
    });
  };
};
