const { body } = require('express-validator');

const usernameValidation = () => {
  return body('username')
    .trim()
    .notEmpty()
    .withMessage('Username cannot be empty')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long');
};

const passwordValidation = () => {
  return body('password')
    .trim()
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 4 })
    .withMessage('Password must be at least 4 characters long')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/)
    .withMessage('Password must contain at least 1 number and 1 letter');
};

const repeatPasswordValidation = () => {
  return body('repeatPassword')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Passwords don't match");
};

const firstNameValidation = () => {
  return body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name cannot be empty')
    .isLength({ min: 3 })
    .withMessage('First name must be at least 3 characters long');
};

const lastNameValidation = () => {
  return body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name cannot be empty')
    .isLength({ min: 3 })
    .withMessage('Last name must be at least 3 characters long');
};

const ageValidation = () => {
  return body('age')
    .trim()
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage('Age should be a number')
    .custom((value) => {
      if (Number(value) <= 0) {
        throw new Error('Age should be higher than 0');
      }
      return true;
    });
};

module.exports = {
  usernameValidation,
  passwordValidation,
  repeatPasswordValidation,
  firstNameValidation,
  lastNameValidation,
  ageValidation,
};
