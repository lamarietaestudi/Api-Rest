const Game = require('../models/games');

const getGames = async (req, res, next) => {
  try {
    const games = await Game.find().populate('category').populate('platforms');
    return res.status(200).json(games);
  } catch (error) {
    return res.status(400).json('Error in Get Game controller');
  }
};

const getGame = async (req, res, next) => {
  try {
    const { id_game } = req.params;
    const game = await Game.findById(id_game)
      .populate('category')
      .populate('platforms');
    return res.status(200).json(game);
  } catch (error) {
    return res.status(400).json('Error in Get Game by ID controller');
  }
};

const getGamesByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const games = await Game.find({ category }).populate('platforms');
    return res.status(200).json(games);
  } catch (error) {
    return res.status(400).json('Error in Get Game by Category controller');
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
    const gameUpdated = await Game.findByIdAndUpdate(id_game, req.body, {
      new: true
    }).populate('platforms');
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
      .json({ message: 'Deleted Game: ', element: gameDeleted });
  } catch (error) {
    return res.status(400).json('Error in Delete Game controller');
  }
};

module.exports = {
  getGames,
  getGame,
  getGamesByCategory,
  postGame,
  updateGame,
  deleteGame
};
