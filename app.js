// Import the express module
import express from 'express';

// Instantiate an express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define the port number where our server will listen
const PORT = 3000;

// Define a "default" route for our website's home page
app.get('/', (req, res) => {

    // Send our home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Define a "thank you" route
app.get('/thankyou', (req, res) => { // 
    res.sendFile(`${import.meta.dirname}/views/thankyou.html`)
})

// Tell the server to listen on our speciifed port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})