function validateToken(request, response, next) {
  try {
    const { authorization } = request.headers;
    if (!authorization) {
      return response.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
      return response.status(401).json({ message: 'Token inválido' });
    }
    return next();
  } catch (error) {
    return response.status(500).end();
  }
}
  module.exports = validateToken;