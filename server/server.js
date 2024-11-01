require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const { User } = require('./models/user');
const { Project } = require('./models/project');
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

app.get('/getProjects', async (req, res) => {
  try {
    const { search } = req.query;
    const projects = await Project.findAll();

    if (!search) {
      return res.send(projects);
    }

    const suitableProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()),
    );

    return res.send(suitableProjects);
  } catch (e) {
    return res.send({ error: e.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password, firstName, lastName, age } = req.body;

    const user = await User.create({
      username,
      password,
      firstName,
      lastName,
      age,
    });

    return res.send({ user, isAuth: true });
  } catch (e) {
    return res.send({ error: e.message });
  }
});

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
