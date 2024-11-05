require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const router = require('./routes/routes.js');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.SERVER_PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_HOST,
    methods: ['GET', 'POST'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (e) {
    console.log(
      `There is an error occurred while connecting to the database: ` + e,
    );
  }
};

startServer();
