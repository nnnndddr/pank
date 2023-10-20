const showPopupButton = document.getElementById('showPopup');
const option1 = document.getElementById('option1');

showPopupButton.addEventListener('click', function() {
    if (option1.checked) {
        alert('Правильно!!!!!!!!!!.');
    } else {
        alert('Выбери ответ.');
    }
});

const nameInput = document.getElementById('nameInput');
const checkCompatibilityButton = document.getElementById('checkCompatibility');

checkCompatibilityButton.addEventListener('click', function() {
    const enteredName = nameInput.value.toLowerCase();
    if (enteredName === 'ярослав' || enteredName === 'ярик') {
        alert('100%');
    } else {
        alert('Вы не совместимы');
    }
});