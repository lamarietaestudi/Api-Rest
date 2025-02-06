const Player = require('../models/players');

const getPlayers = async (req, res, next) => {
  try {
    const players = await Player.find().populate('games').populate('platforms');
    return res.status(200).json(players);
  } catch (error) {
    return res.status(400).json('Error in Get Player controller');
  }
};

const getPlayer = async (req, res, next) => {
  try {
    const { id_player } = req.params;
    const player = await Player.findById(id_player)
      .populate('games')
      .populate('platforms');
    return res.status(200).json(player);
  } catch (error) {
    return res.status(400).json('Error in Get Player by ID controller');
  }
};

const getUnderAgePlayers = async (req, res, next) => {
  try {
    const { age_limit } = req.params;
    const underAgePlayer = await Player.find({ age: { $lte: age_limit } })
      .populate('games')
      .populate('platforms');
    return res.status(200).json(underAgePlayer);
  } catch (error) {
    return res.status(400).json('Error in Get Adult Player controller');
  }
};

const postPlayer = async (req, res, next) => {
  try {
    const newPlayer = new Player(req.body);
    const playerSaved = await newPlayer.save();
    return res.status(201).json(playerSaved);
  } catch (error) {
    return res.status(400).json('Error in Post Player controller');
  }
};

const updatePlayer = async (req, res, next) => {
  try {
    const { id_player } = req.params;
    const newPlayer = new Player(req.body);
    newPlayer._id = id_player;
    const playerUpdated = await Player.findByIdAndUpdate(id_player, newPlayer, {
      new: true
    });
    return res.status(200).json(playerUpdated);
  } catch (error) {
    return res.status(400).json('Error in Update Player controller');
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const { id_player } = req.params;
    const playerDeleted = await Player.findByIdAndDelete(id_player);
    return res
      .status(200)
      .json({ message: 'Jugador eliminado: ', element: playerDeleted });
  } catch (error) {
    return res.status(400).json('Error in Delete Player controller');
  }
};

module.exports = {
  getPlayers,
  getPlayer,
  getUnderAgePlayers,
  postPlayer,
  updatePlayer,
  deletePlayer
};
