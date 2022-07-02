export const validateLoginForm = ({ email, password }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = ({ username, email, password }) => {
  const isEmailValid = validateEmail(email);
  const isUserNameValid = validateUsername(username);
  const isPasswordValid = validatePassword(password);
  return isEmailValid && isPasswordValid && isUserNameValid;
};

const validateUsername = (username) => {
  return username.length >= 3 && username.length <= 12;
};

const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 12;
};

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
