import { combineReducers } from 'redux';
import { createStore } from 'redux';
import BooksReducer from './books.reducer';
import NavigationReducer from './navigation.reducer';
import BookSelect from './book.select.reducer';

const allReducers = combineReducers({
	books: BooksReducer,
	navigation: NavigationReducer,
	bookSelect: BookSelect
});

export default allReducers;