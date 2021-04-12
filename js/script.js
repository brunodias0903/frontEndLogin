var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus', () => {
    email.style.borderWidth = "#0062ff";
});

email.addEventListener('blur', () => {
    email.style.borderWidth = "#ccc";
});

password.addEventListener('focus', () => {
    email.style.borderWidth = "#0062ff";
});

password.addEventListener('blur', () => {
    email.style.borderWidth = "#ccc";
});