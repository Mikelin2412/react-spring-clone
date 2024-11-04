const Router = require('express');
const ProjectService = require('../services/ProjectService.js');
const UserService = require('../services/UserService.js');
const {
  usernameValidation,
  passwordValidation,
  firstNameValidation,
  lastNameValidation,
  ageValidation,
} = require('../utils/validations.js');
const router = new Router();

router.get('/getProjects', ProjectService.getProjects);
router.post(
  '/signUp',
  usernameValidation(),
  passwordValidation(),
  firstNameValidation(),
  lastNameValidation(),
  ageValidation(),
  UserService.signUp,
);
router.post('/login', UserService.login);

module.exports = router;
