const express = require('express');
const router = express.Router();

const movieList = [];

router.get('/', (req, res) => {
  res.send(movieList);
});

router.post('/', (req, res) => {
  movieList.push(req.body);
  res.sendStatus(200);
});

module.exports = router;

// Steps:
// 1: Create a new folder in /server called /routes.
// 2: Create files in that folder, naming convention "fileName".router.js.
// 3: In that file, copy over the app.get and app.post functions from server, along with any variables used.
// 4: Setup the mini server at top ( express = require('express'); & const router = express.Router(); ).
// 5: Export the stuff at the bottom ( module.exports = router; ).
// 6: Link that on server side ( const movieRouter = require('./routes/movie.router'); ).
// 7: Make it app.use on server side ( app.use('/movie', movieRouter); ).
// 8: Make sure you change the router.js from 'app.get' to 'router.get' (same for POST).
// 9: Lastly, make sure you make the file path JUST whack '/'.