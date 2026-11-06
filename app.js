//Import the express module
import express from 'express';

//Create an instance of an express application
const app = express();

//Define a port number for our server to listen on
const PORT = 3006; // Choose an available port number

//Set view engine to EJS
app.set('view engine', 'ejs');

//Enable static file serving
app.use(express.static('public'));

//Defining default root ("/")
app.get('/', (req, res) => {

    //render home when at the default root
    const person = {name: 'Donald Duck', occupation: "bagpiper", favColor: "blue"}
    res.render('home', {person});
});

// Defining route to friends ejs
app.get('/friends', (req, res) => {
    const friends = [ 'Mickey', 'Goofy', 'Minnie', 'Daisy' ];

    res.render('friends', { friends });
});

app.get('/fav-movies', (req, res) => {
    const movies = [ 'Avengers: Endgame', 'Avengers: Infinity War', 'Gladiator', 'The Lion King', 'Fast Five', 'Avatar Fire and Ash', 'Toy Story 3', 'Real Steel'];

    res.render('fav-movies', { movies });
})

//Start server on the designated PORT
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));