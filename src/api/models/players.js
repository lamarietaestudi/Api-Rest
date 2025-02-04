const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
  {
    nickname: { type: String, required: true, trim: true },
    category: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'games'
      }
    ],
    age: { type: Number, required: true, trim: true },
    profileImg: { type: String, required: true }
  },
  { timestamps: true }
);

const Player = mongoose.model('players', playerSchema, 'players');
module.exports = Player;
