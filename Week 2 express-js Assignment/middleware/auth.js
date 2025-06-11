const auth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== 'mysecureapikey') {
        return res.status(401).json({ message: 'Unauthorized: Invalid API key' });
    }
    next();
};
module.exports = auth;
