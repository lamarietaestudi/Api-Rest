const Platform = require('../models/platforms');

const getPlatforms = async (req, res, next) => {
  try {
    const platforms = await Platform.find().populate('games');
    return res.status(200).json(platforms);
  } catch (error) {
    return res.status(400).json('Error in Get Platform controller');
  }
};

const postPlatform = async (req, res, next) => {
  try {
    const newPlatform = new Platform(req.body);
    const platformSaved = await newPlatform.save();
    return res.status(201).json(platformSaved);
  } catch (error) {
    return res.status(400).json('Error in Post Platform controller');
  }
};

const updatePlatform = async (req, res, next) => {
  try {
    const { id_platform } = req.params;

    const oldPlatform = await Platform.findById(id_platform);
    if (!oldPlatform) {
      return res.status(404).json({ message: 'Platform not found' });
    }
    let updatedGames = oldPlatform.games.map((game) => game.toString());

    if (req.body.games && Array.isArray(req.body.games)) {
      req.body.games.forEach((gameId) => {
        if (!updatedGames.includes(gameId)) {
          updatedGames.push(gameId);
        }
      });
    }

    const platformUpdated = await Platform.findByIdAndUpdate(
      id_platform,
      { $set: { games: updatedGames } },
      { new: true }
    ).populate('games');

    return res.status(200).json(platformUpdated);
  } catch (error) {
    return res.status(400).json({
      error: 'Error in Update Platform controller',
      details: error.message
    });
  }
};

const deletePlatform = async (req, res, next) => {
  try {
    const { id_platform } = req.params;
    const platformDeleted = await Platform.findByIdAndDelete(id_platform);
    return res
      .status(200)
      .json({ message: 'Deleted platform: ', element: platformDeleted });
  } catch (error) {
    return res.status(400).json('Error in Delete Platform controller');
  }
};

module.exports = { getPlatforms, postPlatform, updatePlatform, deletePlatform };
