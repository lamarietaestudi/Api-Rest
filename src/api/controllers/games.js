const Game = require('../models/games');

const getGame = async (req, res, next) => {
  try {
    const games = await Game.find();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(400).json('Error in Get Game controller');
  }
};

const postGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);
    const gameSaved = await newGame.save();
    return res.status(201).json(gameSaved);
  } catch (error) {
    return res.status(400).json('Error in Post Game controller');
  }
};

const updateGame = async (req, res, next) => {
  try {
    const { id_game } = req.params;
    console.log('Received ID:', id_game);
    console.log('Received Body:');
    const gameUpdated = await Game.findByIdAndUpdate(id_game, req.body, {
      new: true
    });
    return res.status(200).json(gameUpdated);
  } catch (error) {
    return res.status(400).json('Error in Update Game controller');
  }
};

const deleteGame = async (req, res, next) => {
  try {
    const { id_game } = req.params;
    const gameDeleted = await Game.findByIdAndDelete(id_game);
    return res
      .status(200)
      .json({ message: 'Juego eliminado: ', element: gameDeleted });
  } catch (error) {
    return res.status(400).json('Error in Delete Game controller');
  }
};

module.exports = { getGame, postGame, updateGame, deleteGame };
