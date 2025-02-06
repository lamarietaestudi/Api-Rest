const {
  getGames,
  getGame,
  getGamesByCategory,
  postGame,
  updateGame,
  deleteGame
} = require('../controllers/games');

const gamesRouter = require('express').Router();

gamesRouter.get('/:id_game', getGame);
gamesRouter.get('/category/:category', getGamesByCategory);
gamesRouter.get('/', getGames);
gamesRouter.post('/', postGame);
gamesRouter.put('/:id_game', updateGame);
gamesRouter.delete('/:id_game', deleteGame);

module.exports = { gamesRouter };
