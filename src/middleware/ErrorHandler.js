function errorHandler(err, req, res, next) {
    console.error('Unhandler error', err);


    if (err.code === "23505") {
        return res.status(409).json({ error: 'A user with this email is already exits' })
    }


    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';


    res.status(statusCode).json({ error: message })






}


module.exports = errorHandler