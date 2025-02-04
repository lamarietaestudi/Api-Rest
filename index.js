require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const { playersRouter } = require('./src/api/routes/players');
const { gamesRouter } = require('./src/api/routes/games');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/players', playersRouter);
app.use('/api/v1/games', gamesRouter);

app.use('/', (req, res) => {
  return res.status(200).json('Funciona correctamente');
});

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada');
});

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000');
});
