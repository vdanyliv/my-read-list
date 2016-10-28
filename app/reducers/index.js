import { combineReducers } from 'redux';
import { createStore } from 'redux';
import BooksReducer from './books.reducer';
import NavigationReducer from './navigation.reducer';
import BookSelect from './book.select.reducer';
import BookSearch from './book.search.reducer';

const allReducers = combineReducers({
	books: BooksReducer,
	navigation: NavigationReducer,
	bookSelect: BookSelect,
	bookSearch: BookSearch
});

export default allReducers;