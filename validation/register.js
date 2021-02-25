const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  Object.keys(data).forEach(key => {
    data[key] = !isEmpty(data[key]) ? data[key] : '';
  });

  if (Validator.isEmpty(data.name)) errors.name = 'Name field is required';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  } else if (!Validator.isLength(data.password, { min: 6, max: 40 })) {
    errors.password = 'Password must be at least 6 characters';
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
};