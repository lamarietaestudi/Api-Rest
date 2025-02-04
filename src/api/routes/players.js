const {
  getPlayer,
  getSinglePlayer,
  postPlayer,
  updatePlayer,
  deletePlayer
} = require('../controllers/players');

const playersRouter = require('express').Router();

playersRouter.get('/', getPlayer);
playersRouter.get('/:id_player', getSinglePlayer);
playersRouter.post('/', postPlayer);
playersRouter.put('/:id_player', updatePlayer);
playersRouter.delete('/:id_player', deletePlayer);

module.exports = { playersRouter };
