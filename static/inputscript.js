const loginInput = document.querySelector("#login-input");
const passInput = document.querySelector("#password-input");
const sendInput = document.querySelector("#submit-input");
let inputLoginValue;
let inputPassValue;
let inputSendValue;

// Функция для отображения ошибки
function showError(inputElement, message) {
inputElement.className = "form-input-text-error";
const errorMessage = document.createElement("span");
errorMessage.textContent = message;
errorMessage.className = "form-error-message";
inputElement.parentElement.appendChild(errorMessage);
}

// Функция для очистки ошибок
function clearErrors(inputElement) {
inputElement.className = "form-input-text";
const errorMessages = inputElement.parentElement.querySelectorAll('.form-error-message');
errorMessages.forEach(message => message.remove());
}

// Обработчики событий для логина
loginInput.addEventListener("input", () => {
inputLoginValue = loginInput.value;
});

loginInput.addEventListener("blur", () => {
if (!inputLoginValue || inputLoginValue.length < 4) {
let message = !inputLoginValue ? "Пропущено поле" : "Логин меньше 4 символов";
showError(loginInput, message);
}
});

loginInput.addEventListener("focus", () => {
clearErrors(loginInput);
});

// Обработчики событий для пароля
passInput.addEventListener("input", () => {
inputPassValue = passInput.value;
});

passInput.addEventListener("blur", () => {
if (!inputPassValue || inputPassValue.length < 8) {
let message = !inputPassValue ? "Пропущено поле" : "Пароль не может быть меньше 8 символов";
showError(passInput, message);
}
});

passInput.addEventListener("focus", () => {
clearErrors(passInput);
});

sendInput.addEventListener("input", () => {
inputSendValue = sendInput.value;
});

// Обработчик события для кнопки отправки
sendInput.addEventListener("click", () => {
clearErrors(loginInput);
clearErrors(passInput);

let hasErrors = false;

if (!inputLoginValue || inputLoginValue.length < 4) {
let message = !inputLoginValue ? "Пропущено поле" : "Логин меньше 4 символов";
showError(loginInput, message);
hasErrors = true;
}

if (!inputPassValue || inputPassValue.length < 8) {
let message = !inputPassValue ? "Пропущено поле" : "Пароль не может быть меньше 8 символов";
showError(passInput, message);
hasErrors = true;
}

if (!hasErrors) {
alert('Форма успешно отправлена ^_^');
}
});