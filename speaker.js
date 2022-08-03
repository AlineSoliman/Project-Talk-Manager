const fs = require('fs').promises;

const talkers = async (_request, response) => {
  const getTalker = await fs.readFile('./talker.json', 'utf-8');
  const speaker = JSON.parse(getTalker);
  if (!speaker) {
    return response.status(200).send([]);
  }
  return speaker;
};

module.exports = talkers;