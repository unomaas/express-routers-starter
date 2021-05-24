// This is us calling in express, just like on server.js.
const express = require('express');
// This is us calling in Router from express.  Don't want a full server, just a router widget. R needs to be capitalized.  
const router = express.Router();

// Copying over the bookList array from server.js:
const bookList = [];

//Then we change the below from app.get to router.get:
// Matches /book in server, everytyhing here is after /book:
router.get('/', (req, res) => {
  res.send(bookList);
});

// Reads /book/add
// router.post('/add', (req, res) => {
router.post('/', (req, res) => {
  bookList.push(req.body);
  res.sendStatus(200);
});

// Still need to export at end:
module.exports = router; // Saying this router is available if people want to ask for it. 

// End Goal: We have moved all book stuff from the server.js into it's own router module.  