// const dotenv = require('./.env');
// dotenv.config();


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// let users = [];
// let ratings = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;


app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);


apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'User already exists' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email});
  }
});

apiRouter.post('/poster', async (req, res) => {
  let key = require('./key.json').key;
  const { page } = req.body;
  // const API_KEY = process.env.API_KEY;

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${page}`);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error fetching movie data:', error);
    res.status(500).send({ msg: 'Error fetching data from the movie API' });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};


apiRouter.get('/ratings', verifyAuth, async (_req, res) => {
  const ratings = await DB.getRatings();
  res.send(ratings);
});

apiRouter.post('/ratings', verifyAuth, async (req, res) => {
  await DB.addRating(req.body);
  const ratings = await DB.getRatings();
  webSocketServer.broadcast(JSON.stringify({ type: 'new_review', review: req.body }));
  res.send(ratings);
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }

  return DB.getUser(value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


const webSocketServer = peerProxy(httpService);