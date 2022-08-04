function validaEmail(request, response, next) {
  const emailRegex = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
    const { email } = request.body;
    if (!email) { 
      return response.status(400)
      .json({ message: 'O campo "email" é obrigatório' }); 
    }
    if (!emailRegex.test(email)) { 
      return response.status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"',
      }); 
  }
  next();
}
  module.exports = validaEmail;