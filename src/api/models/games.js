const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    coverImg: { type: String, required: true },
    author: { type: String, required: true, trim: true },
    year: { type: Number, required: true, trim: true },
    category: [
      {
        type: String,
        required: true,
        enum: ['action', 'adventure', 'simulation', 'casual', 'puzzle', 'indie']
      }
    ],
    platforms: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Platform'
      }
    ]
  },
  { timestamps: true, collection: 'gamesCollection' }
);

const Game = mongoose.model('Game', gameSchema, 'games'); // model name , Schema name , collection name
module.exports = Game;
