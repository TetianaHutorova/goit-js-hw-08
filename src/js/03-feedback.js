import common from '../common.json';
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(handlerForm, 500));
form.addEventListener('submit', handlerSubmit);

if (localStorage.getItem('common.LSFEEDBACK')) {
  restoreValues();
}
function restoreValues() {
  form.elements.email.value = JSON.parse(
    localStorage.getItem('common.LSFEEDBACK')
  ).email;
  form.elements.message.value = JSON.parse(
    localStorage.getItem('common.LSFEEDBACK')
  ).message;
}

function handlerForm() {
  const feedMessage = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('common.LSFEEDBACK', JSON.stringify(feedMessage));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('common.LSFEEDBACK')));
  evt.currentTarget.reset();
  localStorage.removeItem('common.LSFEEDBACK');
}
