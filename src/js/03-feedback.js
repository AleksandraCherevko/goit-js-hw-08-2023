import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);
let formValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
fillForm();
function fillForm() {
  if (formValues) {
    form.elements.email.value = formValues.email;
    form.elements.message.value = formValues.message;
  }
}
function inputForm() {
  formValues = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
  } catch (error) {
    console.error(error.message);
  }
}
function submitForm(event) {
  event.preventDefault();
  console.log(formValues);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  formValues = {};
}

