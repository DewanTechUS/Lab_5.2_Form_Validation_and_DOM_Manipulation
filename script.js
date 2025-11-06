
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
  // ignore storage errors for this lab
}

 

