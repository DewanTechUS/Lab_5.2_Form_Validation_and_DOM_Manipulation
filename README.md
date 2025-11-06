# Lab 5.2 — Form Validation and DOM Manipulation (Interactive Registration Form)

**Author:**  
Name: **Dewan Farhad Mahmud (Rocky)**  
Cohort: **Per Scholas 2025 | Software Engineer (MERN Stack)**  
GitHub: **https://github.com/DewanTechUS**  
Portfolio: **https://dewantech.com**

## Overview
This project is an Interactive Registration Form that provides real-time input validation and displays custom error messages. It also uses `localStorage` to remember the username after successful registration.

## Learning Objectives
- Handle user input and form validation in real time.
- Use HTML5 validation attributes and JavaScript's Constraint Validation API.
- Update the DOM dynamically to show inline error messages.
- Store and retrieve data from `localStorage`.
- Prevent default form submission behavior to manage validation flow.

## Features
- Live validation while typing (no page refresh)
- Custom error messages below each input
- Password + Confirm Password match checking
- Username saved and pre-filled using `localStorage`
- Clean, user-friendly design

## Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6 DOM + Events + LocalStorage)

## Tools Used
- Visual Studio Code  
- Chrome Developer Tools  
- Git & GitHub  
- Live Server Extension

## File Structure
interactive-registration-form/
- index.html
- styles.css
- script.js
- README.md
- Notes.js
## Reflection

**1. How did `event.preventDefault()` help in handling form submission?**  
It prevented the form from refreshing the page so validation could run first. This allowed error messages to display and control the successful submit behavior.

**2. Difference between HTML5 validation and JavaScript validation — and why use both?**  
HTML5 provides built-in validation (required, type, minlength).  
JavaScript allows custom rules and custom messages.  
Using both ensures accuracy + a better user experience.

**3. How was `localStorage` used, and what are its limitations?**  
`localStorage.setItem()` saved the username, and `localStorage.getItem()` loaded it back when the page was reopened.  
Limitation: `localStorage` is **not secure** and should never store passwords or sensitive data.

**4. Challenge faced while implementing real-time validation:**  
Ensuring confirm password stayed synced with password changes.  
Solution: re-validate confirmPassword every time password input changes.

**5. How did you make error messages clear and user-friendly?**  
Each message was short, specific, and shown right below the corresponding input, so the user knows exactly what to fix.

## What I Learned
- How to validate form input using JavaScript and HTML5.
- How to control form submission with `event.preventDefault()`.
- How to dynamically update DOM elements to guide users.
- How to save and retrieve values in `localStorage`.

# Helpful References (Used While Learning)
- MDN — document.getElementById | https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById 
- MDN — input event | https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event 
- MDN — Constraint Validation API | https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation 
- MDN — Client-side Form Validation | https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation 
- MDN — HTML attribute: pattern | https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern 
- W3Schools — JavaScript Form Validation | https://www.w3schools.com/js/js_validation.asp 
- MDN — Web Storage API Overview | https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
- MDN — Window.localStorage | https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
- MDN — Window.sessionStorage | https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
- JSON stringify / parse - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
- Regex Testing Tool - https://regex101.com/ 
- YouTube — Form Validation Explanation | https://www.youtube.com/watch?v=rsd4FNGTRBw