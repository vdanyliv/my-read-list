const initialState = {
	user: {},
	authorized: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case 'AUTHORIZE_SUCCESS':
			return Object.assign({}, state, {
				user: action.user,
				authorized: true
			});
		default:
			return state;
	}
}