import axios from 'axios';
import { browserHistory } from 'react-router';

module.exports = (dispatch, navigationStore, context) => {
  const documentCookies = document.cookie;
  const splitingCookies = documentCookies.split(';');
  let secret = '';

  for (let i = 0; i < splitingCookies.length; i++) {
    if (splitingCookies[i].indexOf('token') !== -1) {
      secret = splitingCookies[i].substring(splitingCookies[i].indexOf('=') + 1);
      checkPageUserGroup(validateToken);
      break;
    } else if (splitingCookies.length - 1 === i) {
      checkPageUserGroup(redirectToSignIn);
    }
  }

  function checkPageUserGroup(callback) {
    const findPage = navigationStore.find(element => {
      return element.link === browserHistory.getCurrentLocation().pathname ? element.userGroup : null;
    });

    return callback(findPage.userGroup);
  }

  function validateToken(userGroup) {
    axios.post('http://localhost:9001/isAuthorized', {
      token: secret
    })
    .then(response => {
      if ('error' in response.data) {
        if (userGroup.indexOf('guest') === -1 && userGroup.indexOf('member') !== -1) {
          browserHistory.push('/signin');
        }
        context.setState({ checkAuthorization: true });
      } else {
        dispatch({type: 'SIGNUP_SUCCESS', auth: response.data });
        context.setState({ checkAuthorization: true });
      }
    })
    .catch(() => {
      if (userGroup.indexOf('guest') === -1 && userGroup.indexOf('member') !== -1) {
        browserHistory.push('/signin');
      }
      context.setState({ checkAuthorization: true });
    });
  }

  function redirectToSignIn(userGroup) {
    if (userGroup.indexOf('guest') === -1 && userGroup.indexOf('member') !== -1) {
      browserHistory.push('/signin');
    }
    context.setState({ checkAuthorization: true });
  }
};
