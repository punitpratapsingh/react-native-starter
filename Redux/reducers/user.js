/**
 * action reduce
 */
import { APPLICATION_ROUTES } from '../../Components/constants';
import {
	ERROR,
	SUCCESS,
} from '../Actions/actionTypes';

const defaultState = {
	data: undefined,
	page: 0,
	limit: 30,
	length: 0,
	error: undefined,
	success: undefined,
};
/**
 * default state handler/reducer for entity
 */
export default (state = defaultState, {
	type,
	data = [],
	page = 1,
	limit = 10,
	length = 0,
	error,
	success,
}) => {
	switch (type) {
		case APPLICATION_ROUTES.USERS_LIST:
			return Object.assign({}, state, {
				data,
				page,
				limit,
				length: data.length,
			});
		case ERROR:
			return Object.assign({}, state, { error });
		case SUCCESS:
			return Object.assign({}, state, { success });
		default:
			return state;
	}
};
