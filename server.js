const express = require('express');
const app = express();
const port = process.env.API_SERVER_PORT || 3000;
const connection = require('./database/connection');
const booksRouter = require('./routes/books');
const notFound = require('./middlewares/notFound');
const serverError = require('./middlewares/serverError');


//register the static assets folder
app.use(express.static('public'));


//START SERVER
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// FIRST ROUTE
app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.use('/api/v1/books', booksRouter);


//notfoud 404
app.use(notFound);

//server error 500
app.use(serverError);

//handle 404 errors
// app.use((req, res, next) => {
//     res.status(404).send({ error: true, message: 'Route not found' });
// });

//handle 500 errors
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send({ error: true, message: 'Internal server error' });
// });


// //get route to fetch all books

// app.get('/api/v1/books', (req, res) => {
//     res.send('fetching all books');
// })

// //get route to fetch a single book by id

// app.get('api/v1/books/:id', (req, res) => {
//     const id = req.params.id;
//     res.send(`fetching book with id: ${id}`);
// })
