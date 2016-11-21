import {combineReducers} from 'redux';
import BooksReducer from './books.reducer';
import NavigationReducer from './navigation.reducer';
import BookSelect from './book.select.reducer';
import BookSearch from './book.search.reducer';
import User from './user.reducer';

const allReducers = combineReducers({
  user: User,
  books: BooksReducer,
  navigation: NavigationReducer,
  bookSelect: BookSelect,
  bookSearch: BookSearch
});

export default allReducers;
