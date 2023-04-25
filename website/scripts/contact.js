/*jshint esversion: 6 */

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const userName = document.querySelector('#user-name');
  const userEmail = document.querySelector('#user-email');
  const userMessage = document.querySelector('#user-message');

  if (userName.value === '' || userEmail.value === '' || userMessage.value === '') {
    window.alert('Please fill all the fields');
    return;
  }

  const contactPage = document.querySelector('#contact-page');
  contactPage.innerHTML = '<p class="large-text">Thank you for your message</p>';
});
