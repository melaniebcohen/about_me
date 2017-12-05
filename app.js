'use strict';

var userName = prompt('Thanks for visiting this page! What\'s your name?');
console.log('User\'s name:',userName);

alert('Welcome, ' + userName + '! We\'re going to play a guessing game. Get ready!');

// first question
var userHomeYorN = prompt('Yes or No: I am from Seattle, Washington.')
userHomeYorN = userHomeYorN.toUpperCase();
console.log('Am I from Seattle? User answered: ' + userHomeYorN);

if (userHomeYorN === 'YES') {
  alert('That\'s correct, ' + userName + '. I am from Seattle.');
} else if (userHomeYorN === 'NO') {
  alert('Not quite, ' + userName + '. I am indeed from Seattle.');
};

// second question
var userExercise = prompt('Yes or No: Running is my favorite form of exercise.');
userExercise = userExercise.toUpperCase();
console.log('Is running my favorite form of exercise? User answered: ' + userExercise);

if (userExercise === 'YES') {
  alert('Not quite! My favorite form of exercise is actually weightlifting.');
} else if (userExercise === 'NO') {
  alert('Correct, my favorite form of exercise is actually weightlifting rather than running.');
};

// third question
var userKids = prompt('Yes or No: I have kids.');
userKids = userKids.toUpperCase();
console.log('Do I have kids? User answered: ' + userKids);

if (userKids === 'YES') {
  alert('Wrong! Kids are great, but I have a niece and nephew to keep me entertained instead.');
} else if (userKids === 'NO') {
  alert('Correct, no kids for me. I\'m good.');
};

// fourth question
var userHasCats = prompt('Yes or No: I have cats at home.');
userHasCats = userHasCats.toUpperCase();
console.log('Does user have two cats? User answered: ' + userHasCats);

if (userHasCats === 'YES') {
  alert('Yes, ' + userName + ', I do have two cats. I promise I try not to be a crazy cat lady most of the time.');
} else if (userHasCats === 'NO') {
  alert('Wrong! I adopted two cats last year.');
};

// fifth question
var userCareVolunteer = prompt('Yes or No: ')




















//foo
