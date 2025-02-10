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

    const oldGame = await Game.findById(id_game);
    if (!oldGame) {
      return res.status(404).json({ message: 'Game not found' });
    }

    let updatedCategory = oldGame.category.map(String);
    let updatedPlatforms = oldGame.platforms.map(String);

    if (req.body.category && Array.isArray(req.body.category)) {
      req.body.category.forEach((categoryId) => {
        if (!updatedCategory.includes(categoryId)) {
          updatedCategory.push(categoryId);
        }
      });
    }

    if (req.body.platforms && Array.isArray(req.body.platforms)) {
      req.body.platforms.forEach((platformId) => {
        if (!updatedPlatforms.includes(platformId)) {
          updatedPlatforms.push(platformId);
        }
      });
    }

    const gameUpdated = await Game.findByIdAndUpdate(
      id_game,
      { $set: { category: updatedCategory, platforms: updatedPlatforms } },
      { new: true }
    )
      .populate('platforms')
      .populate('category');

    return res.status(200).json(gameUpdated);
  } catch (error) {
    return res
      .status(400)
      .json({
        error: 'Error in Update Game controller',
        details: error.message
      });
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
