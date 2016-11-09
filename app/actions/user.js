import axios from 'axios';

export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAIL';

export const registrationRequest = () => {
  return {
    type: REGISTRATION_REQUEST
  };
};

export const registrationSuccess = authResult => {
  return {
    type: REGISTRATION_SUCCESS,
    auth: authResult
  };
};

export const registrationFailure = () => {
  return {
    type: REGISTRATION_FAILURE
  };
};

export const registerUser = formData => {
  return dispatch => {
    dispatch(registrationRequest());
    axios.post('http://localhost:9001/registration', formData)
    .then(result => {
      dispatch(registrationSuccess(result));
    })
    .catch(() => {
      dispatch(registrationFailure);
    });
  };
};
