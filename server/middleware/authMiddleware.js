const tokenService = require("../services/tokenService");

module.exports = function (req, res, next) {
  try {
    const authToken = req.headers.authorization;
    if (!authToken) {
      const error = new Error('You are unauthorized!');
      error.status = 401;
      throw error;
    }

    const accessToken = authToken.split(' ')[1];
    if (!accessToken) {
      const error = new Error('You are unauthorized!');
      error.status = 401;
      throw error;
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      const error = new Error('You are unauthorized!');
      error.status = 401;
      throw error;
    }

    req.user = userData;
    next();
  } catch (e) {
    return res.status(e.status).json({ errorMessage: e.message });
  }
};
