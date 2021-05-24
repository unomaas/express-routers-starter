// Server setup below: 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const bookRouter = require('./routes/book.router');
// express static file serving - public is the folder name
app.use( express.static('server/public') );
// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})
// Adding in app.use.  Way to plug stuff into the server.  Give it route you want it to match, then the router to go to.

// Global variables below: 
const movieList = [];



// TODO - Move these routes to their own modules!
// GO FIND THE ROUTER YOU WANT
// .use will direct GET, POST, PUT, DELETE options here.  HAVE to use '/book' to filter out the requests. Otherwise all data will go through '/'. 
app.use('/book', bookRouter); // AKA when someone comes to server at whack book route, send them to bookRouter. 


app.get('/movie', (req, res) => {
  res.send(movieList);
});

app.post('/movie', (req, res) => {
  movieList.push(req.body);
  res.sendStatus(200);
});
