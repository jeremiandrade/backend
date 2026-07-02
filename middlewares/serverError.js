//handle 500 errors
const serverError = ((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: true, message: 'Internal server error' });
});
module.exports = serverError;
