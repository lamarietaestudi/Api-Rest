const {
  getPlayer,
  getSinglePlayer,
  getUnderAgePlayer,
  postPlayer,
  updatePlayer,
  deletePlayer
} = require('../controllers/players');

const playersRouter = require('express').Router();

playersRouter.get('/', getPlayer);
playersRouter.get('/:id_player', getSinglePlayer);
playersRouter.get('/underage/:age_limit', getUnderAgePlayer);
playersRouter.post('/', postPlayer);
playersRouter.put('/:id_player', updatePlayer);
playersRouter.delete('/:id_player', deletePlayer);

module.exports = { playersRouter };
