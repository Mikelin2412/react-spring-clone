const jwt = require('jsonwebtoken');

class TokenService {
  refreshTokens = [];

  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
      expiresIn: '1m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
      expiresIn: '30d',
    });
    return { accessToken, refreshToken };
  }

  saveRefreshToken(userId, refreshToken) {
    const tokenIndex = this.refreshTokens.findIndex(
      (item) => item.user === userId,
    );
    if (tokenIndex !== -1) {
      this.refreshTokens[tokenIndex].refreshToken = refreshToken;
      return this.refreshTokens[tokenIndex];
    } else {
      this.refreshTokens.push({ user: userId, refreshToken });
      return { user: userId, refreshToken };
    }
  }

  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_KEY);
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
     try {
       return jwt.verify(token, process.env.JWT_REFRESH_KEY);
     } catch (e) {
       return null;
     }
  }

  findRefreshToken(token) {
    return this.refreshTokens.find((item) => item.refreshToken === token);
  }
}

module.exports = new TokenService();
