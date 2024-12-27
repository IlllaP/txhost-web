// Функция для отслеживания прокрутки и добавления классов для анимации
window.addEventListener('scroll', function() {
  let elements = document.querySelectorAll('.hero, .locations, .location-card');
  
  elements.forEach(element => {
    let position = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    
    // Если элемент виден на экране, добавляем класс для анимации
    if (position < windowHeight * 0.8) {
      element.classList.add('appear');
    }
  });
});