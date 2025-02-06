const {
  getPlayers,
  getPlayer,
  getUnderAgePlayers,
  postPlayer,
  updatePlayer,
  deletePlayer
} = require('../controllers/players');

const playersRouter = require('express').Router();

playersRouter.get('/:id_player', getPlayer);
playersRouter.get('/underage/:age_limit', getUnderAgePlayers);
playersRouter.get('/', getPlayers);
playersRouter.post('/', postPlayer);
playersRouter.put('/:id_player', updatePlayer);
playersRouter.delete('/:id_player', deletePlayer);

module.exports = { playersRouter };
