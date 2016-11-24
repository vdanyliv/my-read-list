import axios from 'axios';

module.exports = (nextState, replace, next) => {
  const documentCookies = document.cookie;
  const splitingCookies = documentCookies.split(';');
  let secret = '';

  console.error(arguments);

  for (let i = 0; i < splitingCookies.length; i++) {
    if (splitingCookies[i].indexOf('token') !== -1) {
      secret = splitingCookies[i].substring(splitingCookies[i].indexOf('=') + 1);
      sendToken();
      break;
    }
  }

  function sendToken() {
    axios.post('http://localhost:9001/isAuthorized', {
      token: secret
    })
    .then(() => {
      next();
    })
    .catch(() => {
      replace('/signin');
      next();
    });
  }
};


