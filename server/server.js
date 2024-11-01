require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const { KEYS, ProjectsInfo } = require('./mock-data');
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_HOST,
    methods: ['GET', 'POST'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);
app.use(express.json());

app.get('/getProjects', (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.send(ProjectsInfo);
  }

  const suitableProjects = ProjectsInfo.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  return res.send(suitableProjects);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  let isAuth =
    username === KEYS.username && password === KEYS.password ? true : false;

  if (!isAuth) {
    return res.status(401).json({ message: "You don't have access!" });
  }

  return res.send({ username, password, isAuth });
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
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
