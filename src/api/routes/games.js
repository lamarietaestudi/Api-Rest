const {
  getGame,
  getGameByCategory,
  postGame,
  updateGame,
  deleteGame
} = require('../controllers/games');

const gamesRouter = require('express').Router();

gamesRouter.get('/', getGame);
gamesRouter.get('/:category', getGameByCategory);
gamesRouter.post('/', postGame);
gamesRouter.put('/:id_game', updateGame);
gamesRouter.delete('/:id_game', deleteGame);

module.exports = { gamesRouter };
