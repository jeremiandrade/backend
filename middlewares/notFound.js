const notFound = (req, res, next) => {
    res.status(404).send({ error: true, message: 'Route not found' });
};
module.exports = notFound;