const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./speaker.js');

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

app.listen(PORT, () => {
  console.log('Online');
}); 
