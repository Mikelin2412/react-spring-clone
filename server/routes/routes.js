const Router = require('express');
const ProjectService = require('../services/ProjectService.js');
const UserService = require('../services/UserService.js');
const {
  usernameValidation,
  passwordValidation,
  firstNameValidation,
  lastNameValidation,
  ageValidation,
  repeatPasswordValidation,
} = require('../utils/validations.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = new Router();

router.get('/getProjects', authMiddleware, ProjectService.getProjects);
router.post(
  '/signUp',
  usernameValidation(),
  passwordValidation(),
  repeatPasswordValidation(),
  firstNameValidation(),
  lastNameValidation(),
  ageValidation(),
  UserService.signUp,
);
router.post(
  '/login',
  usernameValidation(),
  passwordValidation(),
  UserService.login,
);
router.get('/refresh', UserService.refresh);

module.exports = router;
