'use strict';

module.exports = function (token) {
token = token.split('https://oauth.vk.com/blank.html#access_token=').join("");
token = token.split('_&expires_in=0&user_id=');
return token[0];
};