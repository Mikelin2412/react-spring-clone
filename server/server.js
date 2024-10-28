const express = require('express');
const cors = require('cors');
const { KEYS, ProjectsInfo } = require('./mock-data');
const app = express();
const port = 3000;

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);
app.use(express.json());

app.get('/getProjects', (req, res) => {
  const { search } = req.query;

  if (!search) {
    res.send(ProjectsInfo);
  } else {
    const suitableProjects = ProjectsInfo.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()),
    );
    res.send(suitableProjects);
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  let isAuth =
    username === KEYS.username && password === KEYS.password ? true : false;
  res.send({ username, password, isAuth });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
