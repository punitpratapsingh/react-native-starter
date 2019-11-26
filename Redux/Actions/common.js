/**
 * @description
 * experimental common function to  handle the commmonly
 * used redux action that handles the reducing on the
 * basis of the endpoints.
 */
import axios from 'axios';
import {
	fetchAction,
	error,
} from '.'
import { TRANSIENT_TOGGLE, ERROR, SUCCESS } from './actionTypes';

let headers = {
	'Content-Type': 'application/json',
	Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJhZG1pbiIsInRva2VuTGlmZSI6IjEyMGQiLCJpZCI6IjVkYjk4MjhkZTQ2ZjYzMDAxMWI3ZTA5YSJ9LCJpYXQiOjE1NzQ3NTgwNDYsImV4cCI6MTU4NTEyNjA0Nn0.F_h1vD91Y5pO6rDrtykwTyHg6KvMDTM8rinRT5CTS7E',
};

/**
 * trigger fetch entity function
 * @param {*} param0
 */
export const fetchEntity = ({
	payload,
	page = 1,
	limit = 30,
	endpoint,
}) => (dispatch) => {
	if (!endpoint) {
		return dispatch(error({ error: 'Required endpoint is missing.' }));
	}
	headers = {
		'Content-Type': 'application/json',
		Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJhZG1pbiIsInRva2VuTGlmZSI6IjEyMGQiLCJpZCI6IjVkYjk4MjhkZTQ2ZjYzMDAxMWI3ZTA5YSJ9LCJpYXQiOjE1NzQ3NTgwNDYsImV4cCI6MTU4NTEyNjA0Nn0.F_h1vD91Y5pO6rDrtykwTyHg6KvMDTM8rinRT5CTS7E',
	};
	dispatch(fetchAction({ fetching: true }));
	const body = Object.assign({}, payload, { page, limit });

	axios.post(endpoint, body, { headers })
		.then((response) => {
			const {
				data: {
					code,
					data,
				},
			} = response;
			if (code === 100) {
				// dispatch the success along with the paginated data
				dispatch({
					type: endpoint,
					data,
					page,
					limit,
				});
			}
			dispatch(fetchAction({ fetching: false }));
		}).catch((err) => {
			console.error(err);
			dispatch(fetchAction({ fetching: false }));
			dispatch(error({ error: 'You have not access for this.' }));
		});
};

/**
 * trigger delete entity function. This function is generic to delete any entity within the
 * application. This is a generic calling function and everything
 * @param {*} param0
 * @param {Array<Function>} customDispatchers @todo pass in the array of dispatchers to pass in
 * after the action has been executed successfully.
 */
export const genericDeleteEntity = ({
	page = 1,
	limit = 30,
	payload,
	endpoint,
	listingEndpoint,
	customDispatchers,
}) => (dispatch) => {
	if (!(endpoint && listingEndpoint)) {
		return dispatch(error({ error: 'Required endpoint and listingEndpoint is missing.' }));
	}
	headers = {
		'Content-Type': 'application/json',
		Authorization: localStorage.accessToken,
	};
	dispatch(fetchAction({ fetching: true }));

	axios.post(endpoint, payload, { headers })
		.then((response) => {
			const { data: { code, message } } = response;
			if (code === 100) {
				// refresh the list.
				dispatch(fetchEntity({
					page,
					limit,
					endpoint: listingEndpoint,
					payload,
				}));
				dispatch({ type: SUCCESS, success: 'Entity has been deleted' });
			} else {
				// handle the API error
				dispatch(error({ error: message }));
			}
			dispatch(fetchAction({ fetching: false }));
		}).catch((err) => {
			console.error(err);
			dispatch(fetchAction({ fetching: false }));
			dispatch(error({ error: 'Error while fetching entity list.' }));
		});
};

export const genericBlockEntity = ({
	page = 1,
	limit = 30,
	payload,
	endpoint,
	listingEndpoint,
	customDispatchers,
}) => (dispatch) => {
	if (!(endpoint && listingEndpoint)) {
		return dispatch(error({ error: 'Required endpoint and listingEndpoint is missing.' }));
	}
	headers = {
		'Content-Type': 'application/json',
		Authorization: localStorage.accessToken,
	};
	dispatch(fetchAction({ fetching: true }));

	axios.post(endpoint, payload, { headers })
		.then((response) => {
			const { data: { code, message } } = response;
			if (code === 100) {
				// refresh the list.
				dispatch(fetchEntity({
					page,
					limit,
					endpoint: listingEndpoint,
					payload,
				}));
				dispatch({ type: SUCCESS, success: 'Entity has been block' });
			} else {
				// handle the API errorki
				dispatch(error({ error: message }));
			}
			dispatch(fetchAction({ fetching: false }));
		}).catch((err) => {
			console.error(err);
			dispatch(fetchAction({ fetching: false }));
			dispatch(error({ error: 'Error while fetching entity list.' }));
		});
};

export const genericActionEntity = ({
	page = 1,
	limit = 30,
	payload,
	endpoint,
	listingEndpoint,
	customDispatchers,
}) => (dispatch) => {
	if (!(endpoint && listingEndpoint)) {
		return dispatch(error({ error: 'Required endpoint and listingEndpoint is missing.' }));
	}
	headers = {
		'Content-Type': 'application/json',
		Authorization: localStorage.accessToken,
	};
	dispatch(fetchAction({ fetching: true }));

	axios.post(endpoint, payload, { headers })
		.then((response) => {
			const { data: { code, message } } = response;
			if (code === 100) {
				// refresh the list.
				dispatch(fetchEntity({
					page,
					limit,
					endpoint: listingEndpoint,
					payload,
				}));
				dispatch({ type: SUCCESS, success: 'success' });
			} else {
				// handle the API errorki
				dispatch(error({ error: message }));
			}
			dispatch(fetchAction({ fetching: false }));
		}).catch((err) => {
			console.error(err);
			dispatch(fetchAction({ fetching: false }));
			dispatch(error({ error: 'Error while fetching entity list.' }));
		});
};
/**
 * trigger add entity functionality. This action function is generic to add
 * any new entity into the system.
 * @param {*} param0
 * @param {Array<Function>} customDispatchers contains an array of functions to
 * dispatch once the service has been executed successfully.
 */
export const genericCreateEntity = ({
	page = 1,
	limit = 30,
	payload,
	picture,
	multipleImages = false,
	multipart = false,
	endpoint,
	listingEndpoint,
	customDispatchers = [],
}) => (dispatch) => {
	const s = JSON.stringify(payload);

	if (!(endpoint)) {
		return dispatch(error({ error: 'Missing required property endpoint.' }));
	}
	headers = {
		'Content-Type': 'application/json',
		Authorization: localStorage.accessToken,
	};
	dispatch(fetchAction({ fetching: true }));
	let requestBody = payload;
	// console.log(requestBody);
	// const s = JSON.stringify(payload);
	console.log(s);
	const requestHeaders = Object.assign({}, headers);
	if (multipart) {
		const formData = new FormData();
		if (multipleImages) {
			// picture will be a json mapping to multiple images
			if (typeof (picture) !== 'object') {
				dispatch({ type: ERROR, message: 'Expected to provide atleast one image.' });
				return;
			}
			Object.keys(picture).map(key => formData.append(key, picture[key]));
		} else if (picture) {
			formData.append('image', picture);
		}
		// console.log(payload);
		formData.append('data', JSON.stringify(payload));
		requestHeaders['Content-Type'] = 'multipart/form-data';
		requestBody = formData;
	}
	// console.log(requestBody, requestHeaders);
	axios.post(endpoint, requestBody, { headers: requestHeaders })
		.then((response) => {
			const { data: { code, message } } = response;
			if (code === 100) {
				// created
				// trigger fetch listing
				dispatch(fetchEntity({
					page,
					limit,
					endpoint: listingEndpoint,
					payload,
				}));
				customDispatchers.map(dispatchFunction => dispatch(dispatchFunction()));
				dispatch({ type: SUCCESS, success: 'Success!' });
			} else {
				// handle errors
				dispatch(error({ error: message }));
			}
			return dispatch(fetchAction({ fetching: false }));
		}).catch((err) => {
			console.error(err);
			dispatch(error({ error: 'Error while creating entity' }));
			return dispatch(fetchAction({ fetching: false }));
		});
};


/**
 * a generic toggle function to handle the toggles
 * @param {*} param0
 */
export const genericToggle = ({ toggleId }) => dispatch => dispatch({ type: TRANSIENT_TOGGLE, toggleId });

/**
 * a generic function to handle the tagged values
 * @param {*} property name of property to set
 * @param {*} value value of property to set
 */
export const genericUpdateValue = ({
	property,
	value,
}) => dispatch => dispatch({ type: STATE_PROPERTY, property, value });

export const genericHitEndpoint = ({
	endpoint,
	payload,
	customDispatchers = [],
}) => (dispatch) => {
	dispatch(fetchAction({ fetching: true }));
	headers = {
		'Content-Type': 'application/json',
		Authorization: localStorage.accessToken,
	};
	axios.post(endpoint, payload, { headers })
		.then((success) => {
			const { data: { code, message } } = success;
			if (code === 100) {
				// dispatch a success message
				dispatch({ type: SUCCESS, success: 'Push notificatio have been queued and will be delivered to users one by one.' });
			} else {
				// dispatch an error message
				dispatch({ type: ERROR, error: message });
			}
			dispatch(fetchAction({ fetching: false }));
		})// .catch(err => console.error(err));
};

export const nullifyError = () => (dispatch) => {
	dispatch({ type: ERROR, error: undefined });
};

export const nullifySuccess = () => (dispatch) => {
	dispatch({ type: SUCCESS, success: undefined });
};
