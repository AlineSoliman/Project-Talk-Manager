function validaWatchedAt(request, response, next) {
  const { talk: { watchedAt } } = request.body;
  if (!watchedAt) { 
    return response.status(400)
    .json({ message: 'O campo "watchedAt" é obrigatório' }); 
  } 
  const watchedAtRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!watchedAtRegex.test(watchedAt)) {
    return response.status(400).json(
      { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
    );
  }
  next();
}
module.exports = validaWatchedAt;