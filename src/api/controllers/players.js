const Player = require('../models/players');

const getPlayer = async (req, res, next) => {
  try {
    const players = await Player.find().populate('category');
    return res.status(200).json(players);
  } catch (error) {
    return res.status(400).json('Error in Get Player controller');
  }
};

const getSinglePlayer = async (req, res, next) => {
  try {
    const { id_player } = req.params;
    const player = await Player.findById(id_player).populate('category');
    return res.status(200).json(player);
  } catch (error) {
    return res.status(400).json('Error in Get Single Player controller');
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
  getPlayer,
  getSinglePlayer,
  postPlayer,
  updatePlayer,
  deletePlayer
};
