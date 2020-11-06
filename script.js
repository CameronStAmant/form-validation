const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

email.addEventListener('focusout', () => {
  emailErrorList();
});

const emailErrorList = function emailErrors() {
  if (email.validity.valid) {
    emailError.innerHTML = '';
  } else if (email.validity.tooShort) {
    emailError.textContent = 'Email needs to be at least 5 characters.';
  } else if (email.validity.valueMissing) {
    emailError.textContent = 'Please enter an email.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'That does not look like an email.';
  }
};

const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

country.addEventListener('focusout', () => {
  countryErrorList();
});

const countryErrorList = function countryErrors() {
  if (country.validity.valid) {
    countryError.innerHTML = '';
  } else if (country.validity.tooShort || country.validity.patternMismatch) {
    countryError.textContent = 'Country code should be two characters.';
  }
};

const zip = document.getElementById('zip');
const zipError = document.querySelector('#zip + span.error');

zip.addEventListener('focusout', () => {
  zipErrorList();
});

const zipErrorList = function zipErrors() {
  if (zip.validity.valid) {
    zipError.innerHTML = '';
  } else if (zip.validity.tooShort || zip.validity.tooLong) {
    zipError.textContent = 'The zip should be 5 letters.';
  }
};

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

password.addEventListener('focusout', () => {
  passwordErrorList();
});

const passwordErrorList = function passwordErrors() {
  if (password.validity.valid) {
    passwordError.innerHTML = '';
  } else if (password.validity.tooShort) {
    passwordError.textContent =
      'The password needs to be at least 8 characters.';
  }
};

const passwordConfirmation = document.getElementById('passwordConfirmation');
const passwordConfirmationError = document.querySelector(
  '#passwordConfirmation + span.error'
);

passwordConfirmation.addEventListener('focusout', () => {
  passwordConfirmationErrorList();
});

const passwordConfirmationErrorList = function passwordConfirmationErrors() {
  if (passwordConfirmation.value !== password.value) {
    passwordConfirmationError.textContent = 'The passwords do not match.';
  } else if (passwordConfirmation.validity.valid) {
    console.log('2');
    passwordConfirmationError.innerHTML = '';
  }
};

const form = document.getElementById('formy');
form.addEventListener('submit', () => {
  alert('Thanks for the submission!');
});
