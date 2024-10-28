const express = require('express');
const cors = require('cors');
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

app.get('/getAllProjects', (req, res) => {
  res.send('get all projects');
});

app.get('/searchProject', (req, res) => {
  res.send('search projects');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  let isAuth = username === 'admin' && password === '1234' ? true : false;
  res.json({ username, password, isAuth });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
