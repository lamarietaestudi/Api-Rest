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
    const newPlatform = new Platform(req.body);
    newPlatform._id = id_platform;
    const platformUpdated = await Platform.findByIdAndUpdate(
      id_platform,
      newPlatform,
      {
        new: true
      }
    );
    return res.status(200).json(platformUpdated);
  } catch (error) {
    return res.status(400).json('Error in Update Platform controller');
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
