const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

//get route to fetch all books

// router.get('/', (req, res) => {
//     res.send('fetching all books');
// })

router.get('/', bookController.index);



//get route to fetch a single book by id

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     res.send(`fetching book with id: ${id}`);
// })

router.get('/:id', bookController.show);


module.exports = router;
