const { User } = require('../models/user.js');
const bcrypt = require('bcrypt');
const tokenService = require('./tokenService.js');
const { validationResult } = require('express-validator');
const UserDTO = require('../dto/userDto.js');

class UserService {
  async signUp(req, res) {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
      }

      const { username, password, firstName, lastName, age } = req.body;
      const hashPassword = await bcrypt.hash(password, 3);

      const existedUser = await User.findOne({
        where: {
          username,
        },
      });

      if (existedUser) {
        const error = new Error(`User with username ${username} exists!`);
        error.status = 400;
        throw error;
      }

      const user = await User.create({
        username,
        password: hashPassword,
        firstName,
        lastName,
        age,
      });
      const userDTO = new UserDTO(user);
      const tokens = tokenService.generateTokens({ ...userDTO });
      tokenService.saveRefreshToken(userDTO.id, tokens.refreshToken);

      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, user: userDTO });
    } catch (e) {
      return res.send({ error: e.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        const error = new Error('User is not found!');
        error.status = 400;
        throw error;
      }

      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (!isPasswordCorrect) {
        const error = new Error('Password is incorrect!');
        error.status = 401;
        throw error;
      }

      const userDTO = new UserDTO(user);
      const tokens = tokenService.generateTokens({ ...userDTO });
      tokenService.saveRefreshToken(userDTO.id, tokens.refreshToken);

      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, user: userDTO });
    } catch (e) {
      return res.status(e.status).send({ message: e.message });
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;

      if (!refreshToken) {
        const error = new Error('You are unauthorized!');
        error.status = 401;
        throw error;
      }

      const userData = tokenService.validateRefreshToken(refreshToken);
      const savedToken = tokenService.findRefreshToken(refreshToken);
      if (!userData || !savedToken) {
        const error = new Error('You are unauthorized!');
        error.status = 401;
        throw error;
      }

      const user = await User.findByPk(userData.id);
      const userDTO = new UserDTO(user);
      const tokens = tokenService.generateTokens({ ...userDTO });
      tokenService.saveRefreshToken(userDTO.id, tokens.refreshToken);

      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, user: userDTO });
    } catch (e) {
      return res.status(e.status).send({ message: e.message });
    }
  }
}

module.exports = new UserService();
