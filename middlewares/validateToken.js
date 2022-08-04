const crypto = require('crypto');
const { response } = require('express');

function validaToken() {
  const token = crypto.randomBytes(8).toString('hex');
  if (!token) {
   return response.status(400);
  } 
    return token;
}

module.exports = validaToken;