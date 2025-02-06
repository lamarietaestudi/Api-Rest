require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const { playersRouter } = require('./src/api/routes/players');
const { gamesRouter } = require('./src/api/routes/games');
const { platformsRouter } = require('./src/api/routes/platforms');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/players', playersRouter);
app.use('/api/v1/games', gamesRouter);
app.use('/api/v1/platforms', platformsRouter);

app.use('/', (req, res, next) => {
  return res.status(200).json('Success working');
});

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.listen(3000, () => {
  console.log('Server is running on port: http://localhost:3000');
});
