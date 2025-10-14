// Получаем элементы DOM
const input = document.getElementById('userInput');
const button = document.getElementById('checkTypeBtn');

// Добавляем обработчик события клика на кнопку
button.addEventListener('click', function() {
    // Получаем значение из input
    const value = input.value;

    // Определяем тип значения и показываем alert
    alert(`Тип введенного значения: ${typeof value}`);
});