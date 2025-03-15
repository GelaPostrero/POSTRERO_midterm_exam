//imports the express module
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.redirect('/test');
});

//defining the route /test
app.get('/test', (req, res) => {
    //sends the json response
    res.json({ message: 'Express is working! Angela A. Postrero' });
});

//starts the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});