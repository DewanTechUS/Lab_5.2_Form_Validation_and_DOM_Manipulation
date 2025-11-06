
// MDN getElementById: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// MDN input event: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
// W3Schools JavaScript Form Validation: https://www.w3schools.com/js/js_validation.asp
// Get form and input elements by their IDs that i assigned in HTML file or was assigned from lesson 
// Get the form element
// Form element // form with id registrationForm // input elements and error message spans // inputs: username, email, password, confirmPassword // spans: usernameError, emailError, passwordError, confirmPasswordError 
'use strict'; // Strict mode helps prevent errors by enforcing safer JavaScript rules. // It catches common coding mistakes and "unsafe" actions, making debugging easier. //lesson

const form = document.getElementById('registrationForm');

const username = document.getElementById('username'); // input 
const usernameError = document.getElementById('usernameError'); // span for error message
 const email = document.getElementById('email'); // input 
 const emailError = document.getElementById('emailError'); // span for error message
 const password = document.getElementById('password'); // input
 const passwordError = document.getElementById('passwordError'); // span for error message
 const confirmPassword = document.getElementById('confirmPassword'); // input
 const confirmPasswordError = document.getElementById('confirmPasswordError'); // span for error message
// MDN is my friend
// References
// localStorage (main document) https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// Web Storage API Overview https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
// localStorage.setItem() https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
// localStorage.getItem() https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
// localStorage.removeItem() https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem
// Try/Catch Error Handling https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// JSON stringify & parse used often with storage https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
// MDN localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
const STORAGE_KEY = 'irf.username';

try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) username.value = saved;
} catch {
  // ignore storage errors for this lab read lesson // i am testing //console.error('Error accessing localStorage', e);
}
// Constraint Validation API: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
// ref: W3Schools JavaScript Form Validation: https://www.w3schools.com/js/js_validation.asp
// Input event listeners for real-time validation feedback
username.addEventListener('input', () => {
function showError(inputEl, errorEl, message) { // input element, error message span element, message string
  errorEl.textContent = message || ''; // Set the error message text or clear it if no message
     if (message) { // If there's an error message
    inputEl.classList.remove('valid');

  } else if (inputEl.checkValidity()) { // If input is valid
    inputEl.classList.add('valid');
    
} else { // If input is invalid but no message
    inputEl.classList.remove('valid'); // Remove valid class if input is invalid
  }
}
 
//username rules
// 6–20 chars, letters/numbers/_ only  (regex ^\w+$)
// Test regex: https://regex101.com/
// Validate username function // returns true if valid, false if not // shows error message if invalid // uses showError function // called on input event and form submit 
// Username validation function
function validateUsername() { // returns true if valid, false if not
  const val = username.value.trim();
  let msg = '';
  if (!val) msg = 'Username is required.'; // required check
  else if (val.length < 6) msg = 'Username must be at least 6 characters.'; // length checks
  else if (val.length > 20) msg = 'Username must be 20 characters or fewer.'; // length checks
  else if (!/^\w+$/.test(val)) msg = 'Use letters, numbers, and underscores only.'; // regex test
  showError(username, usernameError, msg);
  return !msg;
}
 //lesson//email validation (uses input[type="email"] built-in checks)
 // Validate email function // returns true if valid, false if not // shows error message if invalid // uses showError function // called on input event and form submit
 //ref: MDN Client-side form validation https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
 //ref: MDN Constraint Validation API https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
 // Email validation function
function validateEmail() { // returns true if valid, false if not
  let msg = ''; // Initialize empty message
  if (email.validity.valueMissing) msg = 'Email is required.';// required check
  else if (email.validity.typeMismatch) msg = 'Enter a valid email (e.g., name@example.com).'; // type check
  showError(email, emailError, msg); // Show error message if any
  return !msg; // Return true if no message (valid), false otherwise
}
// Password validation (min 8 chars, at least one uppercase, one lowercase, one digit, one special char)
// Validate password function // returns true if valid, false if not // shows error message if invalid // uses showError function // called on input event and form submit
// Password validation function
// Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character //[!@#$%^&*(),.?":{}|<>]/
//ref: Regex tester https://regex101.com/
//ref: W3Schools JavaScript Form Validation  https://www.w3schools.com/js/js_validation.asp
// Password validation function
// ref: W3Schools JavaScript Form Validation: https://www.w3schools.com/js/js_validation.asp
// Password validation function
function validatePassword() {
  const val = password.value;
  let msg = '';
  if (!val) msg = 'Password is required.';
  else if (val.length < 8) msg = 'Must be at least 8 characters.';
  else if (!/[A-Z]/.test(val) || !/[a-z]/.test(val) || !/\d/.test(val)) {
    msg = 'Include uppercase, lowercase, and a number.';
  }
  showError(password, passwordError, msg);
  return !msg;
} // End validatePassword
function validateConfirmPassword() {// returns true if valid, false if not
  let msg = ''; // Initialize empty message
  if (!confirmPassword.value) msg = 'Please confirm your password.'; // required check
  else if (confirmPassword.value !== password.value) msg = 'Passwords do not match.';   // match check
  showError(confirmPassword, confirmPasswordError, msg); // Show error message if any
  return !msg; // Return true if no message (valid), false otherwise
}
