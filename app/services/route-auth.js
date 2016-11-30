import axios from 'axios';
import { browserHistory } from 'react-router';

module.exports = callback => {
  const documentCookies = document.cookie;
  const splitingCookies = documentCookies.split(';');
  let secret = '';

  for (let i = 0; i < splitingCookies.length; i++) {
    if (splitingCookies[i].indexOf('token') !== -1) {
      secret = splitingCookies[i].substring(splitingCookies[i].indexOf('=') + 1);
      validateToken();
      break;
    } else if (splitingCookies.length - 1 === i) {
      redirectToSignIn();
    }
  }

  function validateToken() {
    axios.post('http://localhost:9001/isAuthorized', {
      token: secret
    })
    .then(response => {
      if ('error' in response.data) {
        browserHistory.push('/signin');
      } else {
        callback({type: 'SIGNUP_SUCCESS', auth: response.data });
      }
    })
    .catch(() => {
      browserHistory.push('/signin');
    });
  }

  function redirectToSignIn() {
    browserHistory.push('/signin');
  }
};
