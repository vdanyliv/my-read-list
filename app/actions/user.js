import axios from 'axios';

export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const registrationSuccess = authResult => {
  return {
    type: SIGNUP_SUCCESS,
    auth: authResult
  };
};

export const registrationFailure = () => {
  return {
    type: SIGNUP_FAILURE
  };
};

export const authFailure = authResult => {
  return {
    type: SIGNIN_FAILURE,
    auth: authResult
  };
};

export const authSuccess = authResult => {
  return {
    type: SIGNIN_SUCCESS,
    auth: authResult
  };
};

export const signupUser = formData => {
  return dispatch => {
    axios.post('http://localhost:9001/signup', formData)
    .then(result => {
      document.cookie = 'token=' + result.data.secretToken;
      dispatch(registrationSuccess(result));
    })
    .catch(() => {
      dispatch(registrationFailure);
    });
  };
};

export const signinUser = formData => {
  return dispatch => {
    axios.post('http://localhost:9001/signin', formData)
      .then(result => {
        if (result.data.error) {
          dispatch(authFailure(result.data));
        } else {
          document.cookie = 'token=' + result.data.secretToken;
          dispatch(authSuccess(result.data));
        }
      })
      .catch(err => {
        dispatch(authFailure(err.data));
      });
  };
};

export const isAuthorized = secret => {
  return dispatch => {
    axios.post('http://localhost:9001/isAuthorized', {
      token: secret
    })
    .then(result => {
      dispatch(authSuccess(result.data));
    })
    .catch(err => {
      dispatch(authFailure(err.data));
    });
  };
};
