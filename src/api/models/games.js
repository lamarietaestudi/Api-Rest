const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    year: { type: Number, required: true, trim: true },
    coverImg: { type: String, required: true },
    category: [
      {
        type: String,
        enum: ['action', 'adventure', 'simulation', 'casual', 'puzzle', 'indie']
      }
    ]
  },
  { timestamps: true }
);

const Game = mongoose.model('games', gameSchema, 'games');
module.exports = Game;
