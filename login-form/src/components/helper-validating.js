export const validating = function (data) {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = "Can't be empty";
  } else if (typeof data.name === 'number') {
    errors.name = 'Name can not be different type';
  } else {
    delete errors.name;
  }
  if (!data.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is not valid';
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = 'Password required';
  } else if (data.password.length < 6) {
    errors.password = 'Password need to be character or more';
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = 'You need to confirm your password';
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Passwords not match';
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = 'Accept our regulations';
  }
  return errors;
};
