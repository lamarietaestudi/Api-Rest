const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
  {
    nickname: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    profileImg: { type: String, required: true },
    games: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Game'
      }
    ],
    platforms: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Platform'
      }
    ]
  },
  { timestamps: true, collection: 'playersCollection' }
);

const Player = mongoose.model('Player', playerSchema, 'players'); // model name , Schema name , collection name
module.exports = Player;
