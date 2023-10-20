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

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = document.querySelector('.slide').offsetWidth;
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < 4) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

updateSlider();
