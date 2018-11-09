const express = require('express');

const routes = express.Router();

const TweetContoller = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', TweetContoller.index);
routes.post('/tweets', TweetContoller.store);

routes.post('/likes/:id', LikeController.store);

module.exports = routes;