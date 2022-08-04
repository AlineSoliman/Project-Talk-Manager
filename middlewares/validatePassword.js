function validaPassword(request, response, next) {
  const { password } = request.body;
  const passwordLength = 6;
    if (!password) { 
      return response.status(400)
      .json({ message: 'O campo "password" é obrigatório' }); 
    }
    if (password.length < passwordLength) { 
      return response.status(400)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres',
      }); 
  }
  next();
}
  module.exports = validaPassword;