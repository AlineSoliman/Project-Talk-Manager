function validaName(request, response, next) {
    const { name } = request.body;
    const nameLength = 3;
    if (!name) { 
      return response.status(400)
      .json({ message: 'O campo "name" é obrigatório' }); 
    }
    if (name.length < nameLength) { 
      return response.status(400)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres',
      }); 
  }
  next();
}
  module.exports = validaName;