import { combineReducers } from 'redux';
import SearchReducer from './search.reducer';
import NavigationReducer from './navigation.reducer';

const allReducers = combineReducers({
	search: SearchReducer,
	navigation: NavigationReducer
});

export default allReducers;