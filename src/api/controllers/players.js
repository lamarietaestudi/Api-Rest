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

    // 1. Obtener el jugador actual
    const oldPlayer = await Player.findById(id_player);
    if (!oldPlayer) {
      return res.status(404).json({ message: 'Player not found' });
    }

    // 2. Inicializar los datos actualizados con los valores actuales
    let updatedGames = oldPlayer.games.map(String);
    let updatedPlatforms = oldPlayer.platforms.map(String);

    // 3. Verificar si se enviaron nuevos juegos y añadir solo los nuevos
    if (req.body.games && Array.isArray(req.body.games)) {
      req.body.games.forEach((gameId) => {
        if (!updatedGames.includes(gameId)) {
          updatedGames.push(gameId);
        }
      });
    }

    // 4. Verificar si se enviaron nuevas plataformas y añadir solo las nuevas
    if (req.body.platforms && Array.isArray(req.body.platforms)) {
      req.body.platforms.forEach((platformId) => {
        if (!updatedPlatforms.includes(platformId)) {
          updatedPlatforms.push(platformId);
        }
      });
    }

    // 5. Guardar los cambios en la base de datos sin sobrescribir otros datos del jugador
    const playerUpdated = await Player.findByIdAndUpdate(
      id_player,
      { $set: { games: updatedGames, platforms: updatedPlatforms } },
      { new: true }
    )
      .populate('platforms')
      .populate('games');

    return res.status(200).json(playerUpdated);
  } catch (error) {
    return res
      .status(400)
      .json({
        error: 'Error in Update Player controller',
        details: error.message
      });
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
