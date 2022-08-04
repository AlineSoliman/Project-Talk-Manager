function validaAge(request, response, next) {
  const { age } = request.body;
  const years = 18;
  if (!age) { 
    return response.status(400)
    .json({ message: 'O campo "age" é obrigatório' }); 
  }
  if (age < years) { 
    return response.status(400)
    .json({ message: 'A pessoa palestrante deve ser maior de idade',
    }); 
}
next();
}
module.exports = validaAge;