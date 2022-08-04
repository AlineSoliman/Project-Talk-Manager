const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./speaker.js');
const validaEmail = require('./middlewares/validateEmail.js');
const validaPassword = require('./middlewares/validatePassword.js');
const validaToken = require('./middlewares/validateToken.js');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_request, response) => {
  const orator = await talkers();
  response.status(HTTP_OK_STATUS).send(orator);
});

app.get('/talker/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const speaker = await talkers();
    const talkerId = speaker.find((Id) => Id.id === +id);
    if (talkerId === undefined) {
  response.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
  } else {
    response.status(200).json(talkerId);
  }
  } catch (error) {
    response.status(500).json(error);
  }
});

app.post('/login', validaEmail, validaPassword, (request, response) => {
  const token = validaToken();
  response.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log('Online');
}); 
