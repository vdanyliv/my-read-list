import axios from 'axios';
module.exports = {
  checkAuth(next, replace, callback) {
    const documentCookies = document.cookie;
    const splitingCookies = documentCookies.split(';');
    let secret = '';

    for (let i = 0; i < splitingCookies.length; i++) {
      if (splitingCookies[i].indexOf('token') !== -1) {
        secret = splitingCookies[i].substring(splitingCookies[i].indexOf('=') + 1);
        return sendToken(secret);
      }
    }

    function sendToken() {
      axios.post('http://localhost:9001/isAuthorized', {
        token: secret
      })
      .then(data => {
        replace('/mybooks/' + data.user.id);
        callback();
      })
      .catch(() => {
        replace('/signin');
      });
    }
  }
};
