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
    const person = {name: 'Donald Duck', occupation: "plumber", favColor: "blue"}
    res.render('home', {person});

});

//Start server on the designated PORT
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));