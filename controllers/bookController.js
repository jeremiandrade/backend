
const connection = require('../database/connection');


const index = (req, res) => {

    //make a query to fetch all books from the database

    const sql = `SELECT * FROM books`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: true, message: 'Internal server error' });
        }

        res.send(results);
    })
}

const show = (req, res) => {

    const id = parseInt(req.params.id);

    //make a query to fetch a single book by id from the database
    const sql = `SELECT * FROM books WHERE id = ?`;

    //make the second query to fetch a single book by id from the database
    const reviewSql = `SELECT * FROM reviews WHERE book_id = ?`;
    // perform the first query to fetch the book by id
    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ error: true, message: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).send({ error: true, message: 'Book not found' });
        }
        const book = results[0];
        res.send(book);
        // perform the second query to fetch the reviews for the book
        connection.query(reviewSql, [id], (err, review) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ error: true, message: 'Internal server error' });
            }
            book.reviews = review;
            res.json(book);
        })
    })
}

module.exports = {
    index,
    show
}